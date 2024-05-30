import { OrdersDataGrid } from '@/components/orders-data-grid'
import { Input } from '@/components/ui/input'

const Clients = () => {
  return (
    <main className="flex flex-1 flex-col">
      <div className="flex justify-between">
        <h1 className="mb-4 text-2xl font-bold">Pedidos</h1>
      </div>
      <form className="flex items-center gap-2">
        <span>Filtros:</span>
        <Input placeholder="Nome do cliente" className="h-8 max-w-[328px]" />
      </form>
      <OrdersDataGrid />
    </main>
  )
}

export default Clients
