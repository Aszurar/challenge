import { ElementType } from 'react'

type InfoItemProps = {
  icon: ElementType
  info: string
  isLink?: boolean
}

export function Item({ icon: Icon, isLink = false, info }: InfoItemProps) {
  return (
    <li>
      <a href="#" className="flex text-xs items-center font-bold gap-1">
        <Icon className="h-3.5 w-3.5" />
        <span
          data-islink={isLink}
          className="data-[islink=true]:hover:text-yellow-450"
        >
          {info}
        </span>
      </a>
    </li>
  )
}
