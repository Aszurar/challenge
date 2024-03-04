import { ComponentProps, ElementType } from 'react'

type IconProps = ComponentProps<'span'> & {
  icon: ElementType
}

export function Icon({ icon: Icon, className }: IconProps) {
  return <Icon className={`h-5 w-5 text-zinc-500 ${className}`} />
}
