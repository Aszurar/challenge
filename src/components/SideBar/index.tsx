import { AlignJustify, List, Menu, Search, SunSnow } from 'lucide-react'

import * as Input from '@/components/Input'
import { Logo } from '@/components/Logo'
import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

import { ThemeToggle } from '../theme/ThemeToggle'
import { MainNavigation } from './MainNavigation'
import { NavItem } from './MainNavigation/NavItem'

export function SideBar() {
  return (
    <Collapsible
      className={`fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b 
        border-border bg-background p-4 data-[state=open]:bottom-0 lg:w-80 
        lg:border-r lg:py-8 lg:data-[state=closed]:bottom-0`}
    >
      <div className="mx-1 flex items-center gap-2.5 ">
        <div className="flex lg:flex-col items-center gap-2.5">
          <Logo />

          <div className="flex items-center gap-2">
            <Input.Root>
              <Input.Container type="search">
                <Input.Icon icon={Search} />
                <Input.Control placeholder="Pesquise..." />
              </Input.Container>
            </Input.Root>

            <ThemeToggle />
          </div>
        </div>

        <CollapsibleTrigger asChild className="ml-auto lg:hidden">
          <Button type="button" variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <div className="mt-auto flex flex-col gap-6 ">
          <nav>
            <NavItem title="Todos" icon={AlignJustify} isChevronDown={false} />
            <NavItem
              title="Temporada atual"
              icon={SunSnow}
              isChevronDown={false}
            />
          </nav>
        </div>

        <MainNavigation />
        <div className="mt-auto flex flex-col gap-6 ">
          <nav>
            <NavItem title="Minha lista" icon={List} isChevronDown={false} />
          </nav>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
