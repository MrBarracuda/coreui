'use client'
import {CContainer, CForm, CFormTextarea} from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import { useSelector } from 'react-redux'
import { useParams } from 'next/navigation'
import { rows } from '@/config/table_cells'
import {nanoid} from "nanoid/non-secure";
import ServiceSheetHeader from "@/components/service-detailed/service-sheet-header";
import ServiceTable from "@/components/service-detailed/service-table";

export default function ServiceView() {
  const sidebarShow = useSelector((state: any) => state.sidebarShow)
  const { serviceId } = useParams()
  const serviceData = rows.find((row) => row.acc_id === parseInt(serviceId, 10))
  const currentDate = (new Date(Date.now())).toLocaleDateString()

  if (serviceData === undefined) {
    return <h3>Invalid service id</h3>
  }

  return (
    <CContainer
      className="p-4 bg-white"
      style={{
        minHeight: '80vh',
        maxWidth: sidebarShow && '79%',
        marginLeft: sidebarShow && '278px',
        fontSize: '14px'
      }}
    >
      <h3 className="mb-4 divider pb-25">
        Service
      </h3>
      <h5 className="mb-4 divider pb-25">
        Quote No {serviceData.acc_id}
      </h5>

      <div className="divider pb-25">
        <h6 className="mb-4">Torch Service</h6>
        <div className="d-flex gap-3">
          <p className="fw-bold">Equip Name:</p>
          <p>{serviceData.equipment_name}</p>
        </div>
        <div className="d-flex gap-3">
          <p className="fw-bold">Date:</p>
          <p>{currentDate}</p>
        </div>
        <div className="d-flex gap-3">
          <p className="fw-bold">Customer ID:</p>
          <p>{nanoid(8)}</p>
        </div>
      </div>

      <div className='pt-25 divider pb-25'>
        <h6 className='pb-25'>Previous Notes</h6>
        <CForm>
          <CFormTextarea
            id="exampleFormControlTextarea1"
            rows={3}
            placeholder="Replace xxx at next service"
            style={{background: 'lightgray', fontSize: '14px'}}
          ></CFormTextarea>
        </CForm>
      </div>

      <ServiceSheetHeader serviceType={serviceData.service_type} customerName={serviceData.customer_name} />

      <ServiceTable />

    </CContainer>
  )
}
