import { isValidPhoneNumber, type CountryCode } from 'libphonenumber-js'
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

export function sanitizePhoneInput(value: string) {
  return value.replace(/[^\d\s+\-()]/g, '')
}

export function validateName(name: string): string | undefined {
  const trimmed = name.trim()
  if (!trimmed) return 'Full name is required.'
  if (trimmed.length > NAME_MAX_LENGTH || name.length > NAME_MAX_LENGTH) {
    return 'Full name must be 30 characters or less.'
  }
  return undefined
}

export function validateEmail(email: string): string | undefined {
  const trimmed = email.trim()
  if (!trimmed) return 'Please enter a valid work email address.'
  if (!EMAIL_PATTERN.test(trimmed)) return 'Please enter a valid work email address.'
  return undefined
}

export function validateCountry(country: string): string | undefined {
  if (!country || !getCountryByCode(country)) return 'Please select a country.'
  return undefined
}

export function validatePhone(phone: string, country: string): string | undefined {
  if (!country) return 'Please enter a valid phone number for the selected country.'
  const digits = phone.replace(/\D/g, '')
  if (!digits) return 'Please enter a valid phone number for the selected country.'

  try {
    if (!isValidPhoneNumber(phone.trim(), country as CountryCode)) {
      return 'Please enter a valid phone number for the selected country.'
    }
  } catch {
    return 'Please enter a valid phone number for the selected country.'
  }

  return undefined
}

export function validateService(service: string): string | undefined {
  if (!service) return 'Please select a service.'
  return undefined
}

export function validateMessage(message: string): string | undefined {
  if (!message.trim()) return 'Message is required.'
  return undefined
}

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {}

  const nameError = validateName(values.name)
  if (nameError) errors.name = nameError

  const emailError = validateEmail(values.email)
  if (emailError) errors.email = emailError

  const countryError = validateCountry(values.country)
  if (countryError) errors.country = countryError

  const phoneError = validatePhone(values.phone, values.country)
  if (phoneError) errors.phone = phoneError

  const serviceError = validateService(values.service)
  if (serviceError) errors.service = serviceError

  const messageError = validateMessage(values.message)
  if (messageError) errors.message = messageError

  return errors
}

export function isContactFormValid(values: ContactFormValues) {
  return Object.keys(validateContactForm(values)).length === 0
}
