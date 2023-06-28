import * as React from 'react'

import cn from './cn'
import { cva } from './cva'

import type { VariantProps } from './cva'

type InferredVariantProps = VariantProps<typeof inputVariants>

type InputProps = InferredVariantProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>

const inputVariants = cva(
  [
    'border-b pt-3 text-base/snug',
    'outline-none transition-all',
    'text-neutral-800',
  ],
  {
    variants: {
      variant: {
        default: [
          'border-zinc-200 placeholder-zinc-500',
          'focus-within:border-zinc-900/80',
        ],
      },
      error: {
        true: 'border-red-500 focus-within:border-red-500',
      },
        // Sem přidat další styly (jako třídy)
      size: {
        sm: 'h-10',
        md: 'h-12',
        lg: 'h-14',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'sm',
    },
  }
)

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  props,
  forwardRef
) {
  const { variant, error, size, className, ...rest } = props

  return (
    <div
      className={cn(
        inputVariants({ variant, size, error, className }),
        'group flex items-start'
      )}>
      <input
        className={
          'flex-1 select-none appearance-none  text-neutral-800 outline-none placeholder:text-sm placeholder:text-zinc-500'
        }
        onKeyDown={(e) => e.stopPropagation()}
        ref={forwardRef}
        {...rest}
      />
    </div>
  )
})

export type { InputProps }
export { Input }

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  InferredVariantProps

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea(props, forwardedRef) {
    const { variant, error, className, ...rest } = props

    return (
      <textarea
        className={cn(
          inputVariants({ error, variant, className }),
          'h-full w-full resize-none py-2'
        )}
        onKeyDown={(e) => e.stopPropagation()}
        ref={forwardedRef}
        {...rest}
      />
    )
  }
)

export type { TextAreaProps }
export { TextArea }

type LabelProps = Omit<
  React.InputHTMLAttributes<HTMLLabelElement>,
  'htmlFor'
> & {
  slug?: string
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(function Label(
  props,
  forwardRef
) {
  const { slug, className, children, ...rest } = props

  return (
    <label
      htmlFor={slug}
      className={cn('text-sm font-medium text-neutral-700', className)}
      ref={forwardRef}
      {...rest}>
      {children}
    </label>
  )
})

export type { LabelProps }
export { Label }
