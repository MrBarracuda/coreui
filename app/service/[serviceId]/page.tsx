'use client'
import { CContainer } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import { useSelector } from 'react-redux'
import { useParams } from 'next/navigation'
import { rows } from '@/config/table_cells'

export default function ServiceView() {
  const sidebarShow = useSelector((state: any) => state.sidebarShow)
  const { serviceId } = useParams()
  const serviceData = rows.find((row) => row.acc_id === parseInt(serviceId, 10))

  return (
    <CContainer
      className="p-4 bg-white"
      style={{
        minHeight: '80vh',
        maxWidth: sidebarShow && '79%',
        marginLeft: sidebarShow && '278px',
      }}
    >
      {' '}
      {serviceData === undefined ? (
        <h3>Invalid service id</h3>
      ) : (
        <>
          <h3
            className="mb-4"
            style={{ borderBottom: '1px solid lightgray', paddingBottom: '20px' }}
          >
            Service
          </h3>
          <h4
            className="mb-4"
            style={{ borderBottom: '1px solid lightgray', paddingBottom: '30px' }}
          >
            Quote No {serviceData.acc_id}
          </h4>
        </>
      )}
    </CContainer>
  )
}
