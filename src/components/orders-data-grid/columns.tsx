'use client'

import { ColumnDef } from '@tanstack/react-table'
import { ArrowRight, ArrowUpDown, Search, X } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'

import { Payment } from './data'

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'action',
    maxSize: 38,
    header: '',
    cell: () => (
      <Button variant="outline" size="icon" title="Detalhes do pedido">
        <Search className="h-[0.9rem] w-[0.9rem]" />
        <span className="sr-only">Detalhes do pedido</span>
      </Button>
    ),
    enableSorting: true,
  },
  {
    accessorKey: 'code',
    header: 'Código',
    cell: ({ row }) => (
      <div className="font-mono lowercase">{row.getValue('code')}</div>
    ),
  },
  {
    accessorKey: 'client',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Cliente
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return <p className=" font-medium">{row.getValue('client')}</p>
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return <p className=" font-medium">{row.getValue('status')}</p>
    },
  },
  {
    accessorKey: 'amount',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Total do pedido
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(amount)

      return <div className=" font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: 'aprove',
    maxSize: 38,
    header: '',
    cell: () => (
      <Button variant="outline">
        <ArrowRight className="mr-2 h-[0.9rem] w-[0.9rem]" /> Aprovar
      </Button>
    ),
    enableSorting: true,
  },
  {
    accessorKey: 'cancel',
    maxSize: 38,
    header: '',
    cell: () => (
      <Button
        variant="outline"
        className="flex items-center hover:border-red-400 hover:bg-red-950 hover:text-red-400"
      >
        <X className="mr-2 h-[0.9rem] w-[0.9rem]" /> Cancelar
      </Button>
    ),
    enableSorting: true,
  },
]
