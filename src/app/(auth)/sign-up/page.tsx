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

const signUpSchema = z.object({
  restaurantName: z.string(),
  ownerName: z.string().min(2),
  ownerEmail: z.string().email(),
  ownerPhone: z.number(),
})

type formType = z.infer<typeof signUpSchema>

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<formType>({
    resolver: zodResolver(signUpSchema),
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
            <h1 className="text-3xl font-bold">Criar uma conta</h1>
            <p>Seja um parceiro e acompanhe suas vendas.</p>
          </div>
          <form className="grid gap-6" onSubmit={handleSubmit(submit)}>
            <FormInput
              type="text"
              label="Nome do estabelecimento"
              placeholder="pizza shop"
              required
              helperText={errors.restaurantName?.message}
              {...register('ownerEmail')}
            />
            <FormInput
              type="text"
              label="Nome"
              placeholder="João Carlos Aguilar"
              required
              {...register('ownerName')}
              helperText={errors.ownerName?.message}
            />
            <FormInput
              type="email"
              label="Email"
              placeholder="exemplo@exemplo.com.br"
              required
              {...register('ownerEmail')}
              helperText={errors.ownerEmail?.message}
            />
            <FormInput
              type="number"
              label="Celular"
              placeholder="99999999999"
              required
              {...register('ownerPhone')}
              helperText={errors.ownerPhone?.message}
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Entrando...' : 'Finalizar cadastro'}
            </Button>

            <Link
              href="/sign-in"
              className="text-center transition-all hover:underline"
            >
              Já possui uma conta? Click aqui
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LogIn
