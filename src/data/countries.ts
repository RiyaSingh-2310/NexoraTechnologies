import {
  getCountries,
  getCountryCallingCode,
  type CountryCode,
} from 'libphonenumber-js'

export type CountryOption = {
  code: CountryCode
  name: string
  callingCode: string
  label: string
}

const regionNames = new Intl.DisplayNames(['en'], { type: 'region' })

export const countries: CountryOption[] = getCountries()
  .map((code) => {
    const name = regionNames.of(code) ?? code
    const callingCode = `+${getCountryCallingCode(code)}`
    return {
      code,
      name,
      callingCode,
      label: `${name} (${callingCode})`,
    }
  })
  .sort((a, b) => a.name.localeCompare(b.name))

export function getCountryByCode(code: string): CountryOption | undefined {
  return countries.find((country) => country.code === code)
}
