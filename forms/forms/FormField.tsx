import * as React from 'react'
import { useFormContext } from 'react-hook-form'

import { Label } from '../Input'

import cn from '../cn'

type UseFormFieldProps = {
  name: string
  label?: string
  className?: string
  fieldClassName?: string
  children?: React.ReactNode
}

const useFormField = <T extends UseFormFieldProps>(props: T) => {
  const { name, label, fieldClassName, className, ...rest } = props
  const { formState, getFieldState } = useFormContext()
  const state = getFieldState(name, formState)
  const id = React.useId()

  return {
    fieldProps: {
      id,
      name,
      label,
      error: state.error?.message,
      className: fieldClassName,
    },
    childProps: {
      id,
      name,
      className,
      ...rest,
    },
  }
}

export type { UseFormFieldProps }
export { useFormField }

type FormFieldProps = {
  id: string
  name: string
  label?: string | React.ReactNode
  className?: string
  children?: React.ReactNode
}

const FormField = (props: FormFieldProps) => {
  const { id, name, label, className, children } = props
  const methods = useFormContext()

  return (
    <div className={cn(className)}>
      {label && <Label slug={id}>{label}</Label>}
      {children}
      {/* Error Message */}
      {methods?.formState?.errors[name]?.message && (
        <div className={'mt-1'}>
          <p
            className={
              'text-xs/snug text-red-500'
            }>{`${methods?.formState?.errors[name]?.message}`}</p>
        </div>
      )}
    </div>
  )
}

export type { FormFieldProps }
export { FormField }
