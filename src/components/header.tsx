import Link from 'next/link'

import { ThemeToggle } from './theme-toggle'
import { Button } from './ui/button'

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between border-b border-foreground/20 bg-background px-8 py-2">
      <nav>
        <ul className="flex gap-4">
          <li>
            <Button variant="ghost" asChild>
              <Link href="#">Performance</Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost" asChild>
              <Link href="#">Catalogo</Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost" asChild>
              <Link href="/clients">Clientes</Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost" asChild>
              <Link href="/sales">Vendas</Link>
            </Button>
          </li>
        </ul>
      </nav>
      <ThemeToggle />
    </header>
  )
}
