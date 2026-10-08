import { useMemo, useState, type FormEvent, type ReactNode } from 'react'
import { Button } from '@/components/common/Button'
import { CountrySelect } from '@/components/forms/CountrySelect'
import { contactServiceOptions } from '@/data/contactServices'
import { useMockSubmit } from '@/hooks/useMockSubmit'
import {
  getPhoneMaxLength,
  isContactFormValid,
  NAME_MAX_LENGTH,
  sanitizePhoneDigits,
  validateContactField,
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from '@/utils/contactValidation'
import { cn } from '@/utils/cn'

const initialValues: ContactFormValues = {
  name: '',
  email: '',
  country: '',
  phone: '',
  service: '',
  message: '',
}

type TouchedFields = Partial<Record<keyof ContactFormValues, boolean>>

export function ContactForm() {
  const [form, setForm] = useState<ContactFormValues>(initialValues)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [touched, setTouched] = useState<TouchedFields>({})
  const [attemptedSubmit, setAttemptedSubmit] = useState(false)
  const { status, submit, reset, isLoading } = useMockSubmit()

  const phoneMaxLength = getPhoneMaxLength(form.country)
  const formIsValid = useMemo(() => isContactFormValid(form), [form])
  const canSubmit = formIsValid && !isLoading

  function shouldShowError(field: keyof ContactFormValues) {
    return Boolean((touched[field] || attemptedSubmit) && errors[field])
  }

  function syncErrors(
    nextForm: ContactFormValues,
    nextTouched: TouchedFields = touched,
    forceAll = attemptedSubmit,
  ) {
    const nextErrors: ContactFormErrors = {}
    ;(Object.keys(nextForm) as Array<keyof ContactFormValues>).forEach((field) => {
      if (forceAll || nextTouched[field]) {
        const error = validateContactField(field, nextForm)
        if (error) nextErrors[field] = error
      }
    })
    setErrors(nextErrors)
  }

  function setField<K extends keyof ContactFormValues>(key: K, value: ContactFormValues[K]) {
    const next = { ...form, [key]: value }
    setForm(next)
    syncErrors(next)
    if (status !== 'idle') reset()
  }

  function onBlur(field: keyof ContactFormValues) {
    const nextTouched = { ...touched, [field]: true }
    setTouched(nextTouched)
    syncErrors(form, nextTouched)
  }

  function onNameChange(value: string) {
    const nextValue = value.length > NAME_MAX_LENGTH ? value.slice(0, NAME_MAX_LENGTH) : value
    const next = { ...form, name: nextValue }
    setForm(next)

    if (value.length > NAME_MAX_LENGTH) {
      setErrors((current) => ({
        ...current,
        name: 'Full name must be 30 characters or less.',
      }))
    } else {
      syncErrors(next)
    }

    if (status !== 'idle') reset()
  }

  function onCountryChange(code: string) {
    const maxLength = getPhoneMaxLength(code)
    const clippedPhone = sanitizePhoneDigits(form.phone).slice(0, maxLength)
    const next = { ...form, country: code, phone: clippedPhone }
    const nextTouched = { ...touched, country: true }
    setForm(next)
    setTouched(nextTouched)
    syncErrors(next, nextTouched)
    if (status !== 'idle') reset()
  }

  function onPhoneChange(value: string) {
    const digits = sanitizePhoneDigits(value).slice(0, phoneMaxLength)
    setField('phone', digits)
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault()
    setAttemptedSubmit(true)
    const nextErrors = validateContactForm(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0 || isLoading) return

    const ok = await submit()
    if (ok) {
      setForm(initialValues)
      setErrors({})
      setTouched({})
      setAttemptedSubmit(false)
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-teal-soft/70 p-6">
        <p className="font-display text-2xl font-semibold text-ink">Message sent</p>
        <p className="mt-2 text-slate">
          Thanks for reaching out. A Nexora teammate will respond shortly.
        </p>
        <Button
          type="button"
          className="mt-5"
          onClick={() => {
            reset()
            setForm(initialValues)
            setErrors({})
            setTouched({})
            setAttemptedSubmit(false)
          }}
        >
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="name" label="Full Name" required error={shouldShowError('name') ? errors.name : undefined}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={NAME_MAX_LENGTH}
            value={form.name}
            onChange={(event) => onNameChange(event.target.value)}
            onBlur={() => onBlur('name')}
            className={cn('form-control', shouldShowError('name') && 'border-amber-signal')}
            aria-invalid={shouldShowError('name')}
            aria-required
          />
        </Field>

        <Field
          id="email"
          label="Work Email"
          required
          error={shouldShowError('email') ? errors.email : undefined}
        >
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => setField('email', event.target.value)}
            onBlur={() => onBlur('email')}
            className={cn('form-control', shouldShowError('email') && 'border-amber-signal')}
            aria-invalid={shouldShowError('email')}
            aria-required
          />
        </Field>

        <Field
          id="country"
          label="Country"
          required
          error={shouldShowError('country') ? errors.country : undefined}
        >
          <CountrySelect
            id="country"
            value={form.country}
            onChange={onCountryChange}
            onBlur={() => onBlur('country')}
            invalid={shouldShowError('country')}
          />
        </Field>

        <Field
          id="phone"
          label="Phone Number"
          required
          error={shouldShowError('phone') ? errors.phone : undefined}
        >
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            pattern="[0-9]*"
            maxLength={phoneMaxLength}
            value={form.phone}
            onChange={(event) => onPhoneChange(event.target.value)}
            onBlur={() => onBlur('phone')}
            className={cn('form-control', shouldShowError('phone') && 'border-amber-signal')}
            aria-invalid={shouldShowError('phone')}
            aria-required
            placeholder="Enter phone number"
          />
        </Field>
      </div>

      <div className="mt-4">
        <Field
          id="service"
          label="Service Interest"
          required
          error={shouldShowError('service') ? errors.service : undefined}
        >
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={(event) => setField('service', event.target.value)}
            onBlur={() => onBlur('service')}
            className={cn(
              'form-control cursor-pointer',
              shouldShowError('service') && 'border-amber-signal',
            )}
            aria-invalid={shouldShowError('service')}
            aria-required
          >
            <option value="">Select a service</option>
            {contactServiceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-4">
        <Field
          id="message"
          label="Message"
          required
          error={shouldShowError('message') ? errors.message : undefined}
        >
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={(event) => setField('message', event.target.value)}
            onBlur={() => onBlur('message')}
            className={cn('form-control', shouldShowError('message') && 'border-amber-signal')}
            aria-invalid={shouldShowError('message')}
            aria-required
          />
        </Field>
      </div>

      {status === 'error' ? (
        <p className="mt-4 text-sm text-amber-signal" role="alert">
          We couldn’t send your message just now. Please try again.
        </p>
      ) : null}

      <Button type="submit" size="lg" className="mt-6" disabled={!canSubmit}>
        {isLoading ? 'Sending…' : 'Send Message'}
      </Button>
    </form>
  )
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string
  label: string
  required?: boolean
  error?: string
  children: ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required ? (
          <span className="ml-0.5 text-amber-signal" aria-hidden>
            *
          </span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p className="mt-1 text-sm text-amber-signal" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
