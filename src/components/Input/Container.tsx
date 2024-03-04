import {
  ComponentProps,
  createContext,
  HTMLInputTypeAttribute,
  useContext,
  useId,
  useMemo,
} from 'react'

type ContainerProps = ComponentProps<'div'> & {
  isFilled?: boolean
  type: HTMLInputTypeAttribute | undefined
}

type InputContextType = {
  id: string
  type?: HTMLInputTypeAttribute
}

const InputContext = createContext({} as InputContextType)

export function Container({
  type,
  isFilled,
  className,
  ...props
}: ContainerProps) {
  const id = useId()
  const contextValue = useMemo(() => ({ id, type }), [id, type])
  return (
    <InputContext.Provider value={contextValue}>
      <div
        data-filled={isFilled}
        data-type={type}
        className={`
        group flex h-10 px-3 py-2 rounded-md border border-input bg-background 
        ring-offset-background gap-2 
        focus-visible:outline-none focus-within:ring-1 focus-within:ring-ring 
        focus-within:ring-offset-2
        disabled:cursor-not-allowed disabled:opacity-50
        data-[error=true]:ring-2 dark:data-[error=true]:ring-2
        data-[error=true]:ring-red-400 dark:data-[error=true]:ring-red-400
      ${className}`}
        {...props}
      />
    </InputContext.Provider>
  )
}

export const useInput = () => useContext(InputContext)
