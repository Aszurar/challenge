import { ComponentProps } from 'react'

type RootProps = ComponentProps<'ul'>

export function Root({ className, ...rest }: RootProps) {
  return <ul className={`flex flex-col gap-2 ${className}`} {...rest} />
}
