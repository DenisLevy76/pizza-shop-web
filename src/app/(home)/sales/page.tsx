import { ClientsDataGrid } from '@/components/clients-data-grid'
import { Card } from '@/components/ui/card'

const Clients = () => {
  return (
    <main className="flex flex-1">
      <Card className="w-full p-4">
        <h1 className="mb-4 text-2xl font-bold">Vendas</h1>
        <ClientsDataGrid />
      </Card>
    </main>
  )
}

export default Clients
