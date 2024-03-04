import { ChevronRight } from 'lucide-react'
import { ElementType } from 'react'

type NavItemProps = {
  title: string
  icon: ElementType
  isChevronDown?: boolean
}

export function NavItem({
  title,
  icon: Icon,
  isChevronDown = true,
}: NavItemProps) {
  return (
    <a
      href=""
      className={`group flex h-10 flex-1 items-center gap-3 rounded-md px-3 
        transition-all hover:bg-yellow-50  dark:hover:bg-yellow-950 
        text-muted-foreground`}
    >
      <Icon
        className={`h-5 w-5 text-muted-foreground group-hover:text-yellow-500`}
      />
      <span
        className={`mr-auto font-medium text-muted-foreground 
          group-hover:text-yellow-700 dark:group-hover:text-yellow-450`}
      >
        {title}
      </span>
      {isChevronDown && (
        <ChevronRight
          size={24}
          className="h-5 w-5 text-muted-foreground group-hover:text-yellow-500"
        />
      )}
    </a>
  )
}
