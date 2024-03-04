import {
  Castle,
  Drama,
  FlameKindling,
  Ghost,
  Heart,
  Medal,
  MessagesSquare,
  Music,
  Rocket,
  Smile,
  Swords,
} from 'lucide-react'

import { NavItem } from './NavItem'

export function MainNavigation() {
  return (
    <nav className="space-y-0.5">
      <NavItem title="Ação" icon={Swords} />
      <NavItem title="Aventura" icon={FlameKindling} />
      <NavItem title="Comédia" icon={Smile} />
      <NavItem title="Drama" icon={Drama} />
      <NavItem title="Dia a dia" icon={MessagesSquare} />
      <NavItem title="Esporte" icon={Medal} />
      <NavItem title="Fantasia" icon={Castle} />
      <NavItem title="Ficção Científica" icon={Rocket} />
      <NavItem title="Musical" icon={Music} />
      <NavItem title="Romance" icon={Heart} />
      <NavItem title="Terror" icon={Ghost} />
    </nav>
  )
}
