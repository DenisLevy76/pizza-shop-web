import { Plus } from 'lucide-react'

import { ClientsDataGrid } from '@/components/clients-data-grid'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const Clients = () => {
  return (
    <main className="flex flex-1">
      <Card className="w-full p-4">
        <div className="flex justify-between">
          <h1 className="mb-4 text-2xl font-bold">Vendas</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Nova venda
          </Button>
        </div>
        <ClientsDataGrid />
      </Card>
    </main>
  )
}

export default Clients
