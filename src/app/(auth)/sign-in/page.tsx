'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { FormInput } from '@/components/form-input'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'

const loginSchema = z.object({
  email: z.string().email(),
})

type formType = z.infer<typeof loginSchema>

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<formType>({
    resolver: zodResolver(loginSchema),
  })

  const submit = async (data: formType) => {
    toast({
      title: 'Autenticação realizada com sucesso!',
      description: 'Um link foi enviado para o seu email.',
    })
    return data
  }

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-2">
      <div className="hidden max-h-screen overflow-hidden bg-muted lg:block">
        <Image
          src="https://source.unsplash.com/random"
          alt=""
          className="w-full"
          width={1920}
          height={1080}
        />
      </div>
      <div className="relative flex items-center justify-center py-12">
        <ThemeToggle className="absolute right-8 top-8" />
        <div className="mx-auto grid gap-12">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Acessar painel</h1>
            <p>Acompanhe suas vendas pelo painel do parceiro!</p>
          </div>
          <form className="grid gap-6" onSubmit={handleSubmit(submit)}>
            <FormInput
              label="Email"
              placeholder="exemplo@exemplo.com.br"
              {...register('email')}
              helperText={errors.email?.message}
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Entrando...' : 'Acessar painel'}
            </Button>
            <Link
              href="/sign-up"
              className="text-center transition-all hover:underline"
            >
              Não possui uma conta? Cadastre-se aqui
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn
