import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { ChevronDown, Search } from 'lucide-react'
import { countries, type CountryOption } from '@/data/countries'
import { cn } from '@/utils/cn'

type Props = {
  id?: string
  value: string
  onChange: (countryCode: string) => void
  invalid?: boolean
  disabled?: boolean
}

export function CountrySelect({ id, value, onChange, invalid, disabled }: Props) {
  const listId = useId()
  const rootRef = useRef<HTMLDivElement | null>(null)
  const searchRef = useRef<HTMLInputElement | null>(null)
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  const selected = useMemo(
    () => countries.find((country) => country.code === value) ?? null,
    [value],
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return countries
    return countries.filter(
      (country) =>
        country.name.toLowerCase().includes(q) ||
        country.callingCode.includes(q) ||
        country.code.toLowerCase().includes(q),
    )
  }, [query])

  useEffect(() => {
    if (!open) return

    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
        setQuery('')
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
        setQuery('')
      }
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  useEffect(() => {
    if (open) {
      searchRef.current?.focus()
    }
  }, [open])

  function selectCountry(country: CountryOption) {
    onChange(country.code)
    setOpen(false)
    setQuery('')
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        id={id}
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-invalid={invalid || undefined}
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          'form-control flex w-full cursor-pointer items-center justify-between gap-2 text-left',
          !selected && 'text-slate/70',
          invalid && 'border-amber-signal',
          disabled && 'cursor-not-allowed opacity-60',
        )}
      >
        <span className="truncate">{selected ? selected.label : 'Select a country'}</span>
        <ChevronDown
          className={cn('h-4 w-4 shrink-0 text-slate transition-transform', open && 'rotate-180')}
          aria-hidden
        />
      </button>

      {open ? (
        <div className="absolute left-0 right-0 z-30 mt-2 overflow-hidden rounded-xl border border-line bg-white shadow-[var(--shadow-lift)]">
          <div className="relative border-b border-line p-2">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate"
              aria-hidden
            />
            <input
              ref={searchRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search countries…"
              className="form-control w-full py-2 pl-9 pr-3"
              aria-label="Search countries"
            />
          </div>
          <ul
            id={listId}
            role="listbox"
            aria-label="Countries"
            className="max-h-60 overflow-y-auto py-1"
          >
            {filtered.length === 0 ? (
              <li className="px-3 py-3 text-sm text-slate">No countries found</li>
            ) : (
              filtered.map((country) => {
                const isSelected = country.code === value
                return (
                  <li key={country.code} role="option" aria-selected={isSelected}>
                    <button
                      type="button"
                      className={cn(
                        'flex w-full cursor-pointer items-center justify-between gap-3 px-3 py-2.5 text-left text-sm transition-colors hover:bg-mist',
                        isSelected && 'bg-teal-soft/60 text-ink',
                      )}
                      onClick={() => selectCountry(country)}
                    >
                      <span className="font-medium text-ink">{country.name}</span>
                      <span className="shrink-0 text-slate">{country.callingCode}</span>
                    </button>
                  </li>
                )
              })
            )}
          </ul>
        </div>
      ) : null}
    </div>
  )
}
