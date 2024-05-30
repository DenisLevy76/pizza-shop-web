import { Home, Pizza, UtensilsCrossed } from 'lucide-react'
import Link from 'next/link'

import { PerfilMenu } from './perfil-menu'
import { ThemeToggle } from './theme-toggle'
import { Button } from './ui/button'

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between border-b border-foreground/20 bg-background px-8 py-2">
      <Pizza />
      <nav>
        <ul className="flex gap-4">
          <li>
            <Button variant="ghost" asChild>
              <Link href="/" className="space-x-2">
                <Home className="h-4 w-4" /> <span>Inicio</span>
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost" asChild>
              <Link href="/pedidos" className="space-x-2">
                <UtensilsCrossed className="h-4 w-4" /> <span>Pedidos</span>
              </Link>
            </Button>
          </li>
        </ul>
      </nav>
      <div className="flex gap-2">
        <PerfilMenu />
        <ThemeToggle />
      </div>
    </header>
  )
}
