import { CButton, CTableDataCell, CTableHeaderCell, CTableRow } from '@coreui/react'
import Link from 'next/link'
import { Rows } from '@/config/table_cells'

type TableRowsProps = {
  rows: Rows
}
export default function TableRows({ rows }: TableRowsProps) {
  return rows.map((row) => (
    <CTableRow key={row.acc_id} style={{ fontSize: '14px' }}>
      <CTableHeaderCell scope="row">{row.acc_id}</CTableHeaderCell>
      <CTableDataCell>{row.customer_name}</CTableDataCell>
      <CTableDataCell>{row.business_name}</CTableDataCell>
      <CTableDataCell>{row.equipment_name}</CTableDataCell>
      <CTableDataCell>{row.equipment_type}</CTableDataCell>
      <CTableDataCell>{row.service_type}</CTableDataCell>
      <CTableDataCell style={{ color: 'green' }}>{row.next_service}</CTableDataCell>
      <CTableDataCell>
        <Link href={`/service/${row.acc_id}`}>
          <CButton color="success" size="sm">
            View
          </CButton>
        </Link>
      </CTableDataCell>
    </CTableRow>
  ))
}
