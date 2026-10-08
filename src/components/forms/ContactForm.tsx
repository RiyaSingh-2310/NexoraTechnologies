import { useMemo, useState, type FormEvent, type ReactNode } from 'react'
import { Button } from '@/components/common/Button'
import { CountrySelect } from '@/components/forms/CountrySelect'
import { contactServiceOptions } from '@/data/contactServices'
import { getCountryByCode } from '@/data/countries'
import { useMockSubmit } from '@/hooks/useMockSubmit'
import {
  isContactFormValid,
  NAME_MAX_LENGTH,
  sanitizePhoneInput,
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

export function ContactForm() {
  const [form, setForm] = useState<ContactFormValues>(initialValues)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [touched, setTouched] = useState(false)
  const { status, submit, reset, isLoading } = useMockSubmit()

  const selectedCountry = getCountryByCode(form.country)
  const formIsValid = useMemo(() => isContactFormValid(form), [form])
  const canSubmit = formIsValid && !isLoading

  function setField<K extends keyof ContactFormValues>(key: K, value: ContactFormValues[K]) {
    const next = { ...form, [key]: value }
    setForm(next)

    if (touched) {
      setErrors(validateContactForm(next))
    } else if (errors[key]) {
      setErrors((current) => {
        const updated = { ...current }
        delete updated[key]
        return updated
      })
    }

    if (status !== 'idle') reset()
  }

  function onNameChange(value: string) {
    if (value.length > NAME_MAX_LENGTH) {
      const clipped = value.slice(0, NAME_MAX_LENGTH)
      const next = { ...form, name: clipped }
      setForm(next)
      setErrors((current) => ({
        ...current,
        ...(touched ? validateContactForm(next) : {}),
        name: 'Full name must be 30 characters or less.',
      }))
      if (status !== 'idle') reset()
      return
    }
    setField('name', value)
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault()
    setTouched(true)
    const nextErrors = validateContactForm(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0 || isLoading) return

    const ok = await submit()
    if (ok) {
      setForm(initialValues)
      setErrors({})
      setTouched(false)
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
            setTouched(false)
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
        <Field
          id="name"
          label="Full Name"
          error={errors.name}
        >
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={NAME_MAX_LENGTH}
            value={form.name}
            onChange={(event) => onNameChange(event.target.value)}
            className={cn('form-control', errors.name && 'border-amber-signal')}
            aria-invalid={Boolean(errors.name)}
            aria-required
          />
        </Field>

        <Field id="email" label="Work Email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => setField('email', event.target.value)}
            className={cn('form-control', errors.email && 'border-amber-signal')}
            aria-invalid={Boolean(errors.email)}
            aria-required
          />
        </Field>

        <Field id="country" label="Country" error={errors.country}>
          <CountrySelect
            id="country"
            value={form.country}
            onChange={(code) => setField('country', code)}
            invalid={Boolean(errors.country)}
          />
        </Field>

        <Field
          id="phone"
          label="Phone Number"
          error={errors.phone}
          hint={
            selectedCountry
              ? `Format for ${selectedCountry.name} (${selectedCountry.callingCode})`
              : 'Select a country to apply the correct phone format'
          }
        >
          <div
            className={cn(
              'flex overflow-hidden rounded-xl border border-line bg-cloud focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-teal-bright',
              errors.phone && 'border-amber-signal',
            )}
          >
            <span className="flex shrink-0 items-center border-r border-line bg-mist px-3 text-sm font-medium text-ink">
              {selectedCountry?.callingCode ?? '+—'}
            </span>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel-national"
              value={form.phone}
              onChange={(event) => setField('phone', sanitizePhoneInput(event.target.value))}
              className="form-control min-w-0 flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:outline-none"
              aria-invalid={Boolean(errors.phone)}
              aria-required
              placeholder={selectedCountry ? 'Enter phone number' : 'Select country first'}
            />
          </div>
        </Field>
      </div>

      <div className="mt-4">
        <Field id="service" label="Service Interest" error={errors.service}>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={(event) => setField('service', event.target.value)}
            className={cn('form-control cursor-pointer', errors.service && 'border-amber-signal')}
            aria-invalid={Boolean(errors.service)}
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
        <Field id="message" label="Message" error={errors.message}>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={(event) => setField('message', event.target.value)}
            className={cn('form-control', errors.message && 'border-amber-signal')}
            aria-invalid={Boolean(errors.message)}
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
  error,
  hint,
  children,
}: {
  id: string
  label: string
  error?: string
  hint?: string
  children: ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {hint && !error ? <p className="mt-1 text-xs text-slate">{hint}</p> : null}
      {error ? (
        <p className="mt-1 text-sm text-amber-signal" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
