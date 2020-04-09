import { useState } from 'react'

export const useField = (type, initialValue = '') => {
  const [value, setValue] = useState(initialValue)

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue('')
  }

  return {
    type,
    value,
    onChange,
    reset,
    bind: {
      type,
      value,
      onChange
    }
  }
}