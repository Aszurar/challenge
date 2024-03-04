import * as React from 'react'

import { cn } from '@/lib/utils'

import { useInput } from '../Input/Container'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const { id, type } = useInput()
    return (
      <input
        id={id}
        type={type}
        className={cn(
          `flex w-full bg-transparent text-sm file:border-0 file:bg-transparent 
           file:text-sm file:font-medium placeholder:text-muted-foreground 
           focus-visible:outline-none disabled:cursor-not-allowed 
           disabled:opacity-50`,
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
