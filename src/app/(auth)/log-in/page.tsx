import Image from 'next/image'

import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const LogIn = () => (
  <div className="w-full lg:grid lg:min-h-[100vh] lg:grid-cols-2">
    <div className="hidden bg-muted lg:block">
      <Image
        src="https://source.unsplash.com/random"
        alt=""
        className="h-full w-full"
        width={1920}
        height={1080}
      />
    </div>
    <div className="relative flex items-center justify-center py-12">
      <ThemeToggle className="absolute right-8 top-8" />
      <div className="mx-auto grid w-[350px] gap-12">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
        </div>
        <form className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="user">Usuário</Label>
            <Input id="user" type="text" placeholder="EmpresaXYZ" required />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </div>
    </div>
  </div>
)

export default LogIn
