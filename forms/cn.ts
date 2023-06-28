import { twMerge } from 'tailwind-merge'

export default function cn(...classes: unknown[]) {
  return twMerge(classes.filter(Boolean).join(' '))
}
