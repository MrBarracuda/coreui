"use client"
import styles from "@/app/page.module.css";
import {CButton, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow} from "@coreui/react";
import Actions from "@/components/actions";
import '@coreui/coreui/dist/css/coreui.min.css'


export default function Service() {

  const columns = [
    {
      key: 'acc_id',
      label: 'Acc ID',
      _props: { scope: 'col' },
      // _style: { paddingInline: '50px'}
    },
    {
      key: 'customer_name',
      label: 'Customer Name',
      _props: { scope: 'col' },
    },
    {
      key: 'business_name',
      label: 'Business Name',
      _props: { scope: 'col' },
    },
    {
      key: 'equipment_name',
      label: 'Equipment Name',
      _props: { scope: 'col' },
    },
    {
      key: 'equipment_type',
      label: 'Equipment Type',
      _props: { scope: 'col' },
    },
    {
      key: 'service_type',
      label: 'Service Type',
      _props: { scope: 'col' },
    },
    {
      key: 'next_service',
      label: 'Next Service',
      _props: { scope: 'col' },
    },
    {
      key: 'btn_view',
      _props: { scope: 'col', className: 'hidden' },
    },
  ]

  type RowItem = {
    acc_id: number
    customer_name: string
    business_name: string
    equipment_name: string
    equipment_type: string
    service_type: string
    next_service: string
    btn_view: JSX.Element
    _cellProps: {id: {scope: string}, next_service: {className: string}}  }

  type RowItems = RowItem[]

  const items: RowItems = [
    {
      acc_id: 12345,
      customer_name: 'Ben Chapman',
      business_name: 'Test Business',
      equipment_name: 'Fronius',
      equipment_type: 'Mig',
      service_type: 'On Site',
      next_service: '23 June 2023',
      btn_view: <CButton color='success' size='sm'>View</CButton>,
      _cellProps: { id: { scope: 'row'}, next_service: {className: 'green-cell'} },
    },
    {
      acc_id: 12346,
      customer_name: 'Ben Chapman',
      business_name: 'Test Business',
      equipment_name: 'Fronius',
      equipment_type: 'Mig',
      service_type: 'Workshop',
      next_service: '23 June 2023',
      btn_view: <CButton color='success' size='sm'>View</CButton>,
      _cellProps: { id: { scope: 'row'}, next_service: {className: 'green-cell'} },
    },
    {
      acc_id: 12347,
      customer_name: 'Steve Tiglerton',
      business_name: 'Test Business',
      equipment_name: 'Fronius',
      equipment_type: 'Mig',
      service_type: 'Workshop',
      next_service: '23 June 2023',
      btn_view: <CButton color='success' size='sm'>View</CButton>,
      _cellProps: { id: { scope: 'row'}, next_service: {className: 'green-cell'} },
    },
  ]
  return (
    <main className={styles.main}>
      <Actions />
      <CTable  striped style={{fontSize: '14px'}} responsive columns={columns} items={items} />
    </main>
  );
}
