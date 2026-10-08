import {
  getExampleNumber,
  isValidPhoneNumber,
  type CountryCode,
} from 'libphonenumber-js'
import examples from 'libphonenumber-js/mobile/examples'
import { getCountryByCode } from '@/data/countries'

export type ContactFormValues = {
  name: string
  email: string
  country: string
  phone: string
  service: string
  message: string
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const NAME_MAX_LENGTH = 30
export const PHONE_FALLBACK_MAX_LENGTH = 15

export function sanitizePhoneDigits(value: string) {
  return value.replace(/\D/g, '')
}

export function getPhoneMaxLength(country: string): number {
  if (!country) return PHONE_FALLBACK_MAX_LENGTH

  try {
    const example = getExampleNumber(country as CountryCode, examples)
    if (example?.nationalNumber) {
      return example.nationalNumber.length
    }
  } catch {
    // Fall through to fallback.
  }

  return PHONE_FALLBACK_MAX_LENGTH
}

export function validateName(name: string): string | undefined {
  const trimmed = name.trim()
  if (!trimmed) return 'Full name is required.'
  if (name.length > NAME_MAX_LENGTH || trimmed.length > NAME_MAX_LENGTH) {
    return 'Full name must be 30 characters or less.'
  }
  return undefined
}

export function validateEmail(email: string): string | undefined {
  const trimmed = email.trim()
  if (!trimmed) return 'Work email is required.'
  if (!EMAIL_PATTERN.test(trimmed)) return 'Please enter a valid work email address.'
  return undefined
}

export function validateCountry(country: string): string | undefined {
  if (!country || !getCountryByCode(country)) return 'Country is required.'
  return undefined
}

export function validatePhone(phone: string, country: string): string | undefined {
  const digits = sanitizePhoneDigits(phone)

  if (!digits) return 'Phone number is required.'
  if (!country || !getCountryByCode(country)) {
    return 'Please enter a valid phone number for the selected country.'
  }

  const maxLength = getPhoneMaxLength(country)
  if (digits.length > maxLength) {
    return 'Please enter a valid phone number for the selected country.'
  }

  try {
    if (!isValidPhoneNumber(digits, country as CountryCode)) {
      return 'Please enter a valid phone number for the selected country.'
    }
  } catch {
    return 'Please enter a valid phone number for the selected country.'
  }

  return undefined
}

export function validateService(service: string): string | undefined {
  if (!service) return 'Service interest is required.'
  return undefined
}

export function validateMessage(message: string): string | undefined {
  if (!message.trim()) return 'Message is required.'
  return undefined
}

const fieldValidators: {
  [K in keyof ContactFormValues]: (values: ContactFormValues) => string | undefined
} = {
  name: (values) => validateName(values.name),
  email: (values) => validateEmail(values.email),
  country: (values) => validateCountry(values.country),
  phone: (values) => validatePhone(values.phone, values.country),
  service: (values) => validateService(values.service),
  message: (values) => validateMessage(values.message),
}

export function validateContactField(
  field: keyof ContactFormValues,
  values: ContactFormValues,
): string | undefined {
  return fieldValidators[field](values)
}

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {}

  ;(Object.keys(fieldValidators) as Array<keyof ContactFormValues>).forEach((field) => {
    const error = fieldValidators[field](values)
    if (error) errors[field] = error
  })

  return errors
}

export function isContactFormValid(values: ContactFormValues) {
  return Object.keys(validateContactForm(values)).length === 0
}
