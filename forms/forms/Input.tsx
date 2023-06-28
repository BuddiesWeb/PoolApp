'use client'

import * as React from 'react'

import { FormField, useFormField } from './FormField'
import * as Root from '../Input'

import type { UseFormFieldProps } from './FormField'

type InputProps = {
  name: string
} & UseFormFieldProps &
  Root.InputProps

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  props,
  forwardRef
) {
  const { fieldProps, childProps } = useFormField(props)

  return (
    <FormField {...fieldProps}>
      <Root.Input
        error={fieldProps.error !== undefined}
        ref={forwardRef}
        {...childProps}
      />
    </FormField>
  )
})

export type { InputProps }
export { Input }
