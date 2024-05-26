import Link from 'next/link'

import { ThemeToggle } from '@/components/ui/theme-toggle'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <header className="flex justify-between">
        <nav>
          <ul>
            <li>
              <Link href="#">Performance</Link>
              <Link href="#">Catalogo</Link>
              <Link href="#">Clientes</Link>
              <Link href="#">Vendas</Link>
            </li>
          </ul>
        </nav>
        <ThemeToggle />
      </header>

      {children}
    </section>
  )
}

export default HomeLayout
