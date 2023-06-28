'use client'

import * as React from 'react'
import { z } from 'zod'

import { Form, useZodForm } from './forms/Form'
import { Input } from './forms/Input'

const schema = z.object({
  fullName: z
    .string()
    .min(1, { message: 'You need to enter your name and surname.' }),
  age: z.number().min(0, {message: "Bude ti víc"}).max(150, {message: "Víc ti nebude"}),
})

const ContactForm = () => {
  const form = useZodForm({ schema })

  const onSubmit = form.handleSubmit((data) => {
    console.log(data)
  })

  return (
    <Form form={form} onSubmit={onSubmit}>
      <Input label={'What is your name?'} {...form.register('fullName')} />
      <Input label={'A kolik ti je bráško?'} type={"number"} {...form.register('age', {valueAsNumber: true})} size={"sm"} />
      <input type="submit" />
    </Form>
  )
}

export { ContactForm }
