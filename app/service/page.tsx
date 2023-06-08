'use client'
import { CContainer, CTable } from '@coreui/react'
import Actions from '@/components/actions'
import '@coreui/coreui/dist/css/coreui.min.css'
import items from '@/config/table_items'
import columns from '@/config/columns'
import { useSelector } from 'react-redux'

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
      <CTable striped style={{ fontSize: '14px' }} responsive columns={columns} items={items} />
    </CContainer>
  )
}
