import { useState } from 'react'
import { delay } from '@/utils/cn'

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

export function useMockSubmit(options?: { failRate?: number; delayMs?: number }) {
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const failRate = options?.failRate ?? 0.08
  const delayMs = options?.delayMs ?? 1200

  async function submit() {
    setStatus('loading')
    await delay(delayMs)
    const failed = Math.random() < failRate
    setStatus(failed ? 'error' : 'success')
    return !failed
  }

  function reset() {
    setStatus('idle')
  }

  return { status, submit, reset, isLoading: status === 'loading' }
}
