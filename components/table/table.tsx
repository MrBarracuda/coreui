import { CTable, CTableBody, CTableHead, CTableRow } from '@coreui/react'
import TableColumns from '@/components/table/table-columns'
import TableRows from '@/components/table/table-rows'
import { Columns, Rows } from '@/config/table_cells'

type TablePros = {
  columns: Columns
  rows: Rows
}
export default function Table({ columns, rows }: TablePros) {
  return (
    <CTable striped>
      <CTableHead>
        <CTableRow>
          <TableColumns columns={columns} />
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <TableRows rows={rows} />
      </CTableBody>
    </CTable>
  )
}
