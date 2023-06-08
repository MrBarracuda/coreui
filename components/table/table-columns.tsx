import { CTableHeaderCell } from '@coreui/react'
import { Columns } from '@/config/table_cells'

type TableColumnsProps = {
  columns: Columns
}
export default function TableColumns({ columns }: TableColumnsProps) {
  return columns.map((column) => (
    <CTableHeaderCell
      scope="col"
      key={column.key}
      className={column.key === 'btn_view' ? 'hidden' : ''}
    >
      {column.label}
    </CTableHeaderCell>
  ))
}
