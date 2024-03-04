import { ComponentProps } from 'react'

type RootProps = ComponentProps<'div'>

export function Root({ className, ...props }: RootProps) {
  return <div className={`w-full items-center gap-1 ${className}`} {...props} />
}
