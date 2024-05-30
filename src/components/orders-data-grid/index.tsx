import { DataGrid } from '../ui/data-grid'
import { columns } from './columns'
import { data } from './data'

export const OrdersDataGrid: React.FC = () => {
  return <DataGrid columns={columns} data={data} />
}
