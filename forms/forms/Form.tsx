'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import * as React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import type {
  FieldValues,
  UseFormHandleSubmit,
  UseFormProps,
  UseFormReturn,
} from 'react-hook-form'

type FormProps<T extends FieldValues> = {
  form: UseFormReturn<T>
  onSubmit?: ReturnType<UseFormHandleSubmit<T>>
} & Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'>

const Form = <T extends FieldValues>(props: FormProps<T>) => {
  const { form, onSubmit, children, ...rest } = props

  return (
    <FormProvider {...form}>
      <form
        onSubmit={(e) => {
          e.stopPropagation()
          e.preventDefault()

          return onSubmit?.(e)
        }}
        {...rest}>
        {children}
      </form>
    </FormProvider>
  )
}

export type { FormProps }
export { Form }

type UseZodFormProps<T extends z.ZodSchema> = Exclude<
  UseFormProps<z.infer<T>>,
  'resolver'
> & {
  schema?: T
}

const useZodForm = <T extends z.ZodSchema = z.ZodObject<Record<string, never>>>(
  props?: UseZodFormProps<T>
) => {
  const { schema, ...formProps } = props ?? {}

  return useForm<z.infer<T>>({
    ...formProps,
    resolver: zodResolver(schema || z.object({})),
  })
}

export type { UseZodFormProps }
export { useZodForm }
