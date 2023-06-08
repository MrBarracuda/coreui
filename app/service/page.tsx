'use client'
import { CContainer } from '@coreui/react'
import Actions from '@/components/actions'
import '@coreui/coreui/dist/css/coreui.min.css'
import { useSelector } from 'react-redux'
import Table from '@/components/table/table'
import { columns, rows } from '@/config/table_cells'

export default function Service() {
  const sidebarShow = useSelector((state: any) => state.sidebarShow)

  return (
    <CContainer
      className="p-4 bg-white"
      style={{
        minHeight: '80vh',
        maxWidth: sidebarShow && '79%',
        marginLeft: sidebarShow && '278px',
      }}
    >
      <h3 className="mb-4">Service and Repair</h3>
      <Actions />
      <Table columns={columns} rows={rows} />
    </CContainer>
  )
}
