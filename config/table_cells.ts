type Column = {
  key: string
  label: string
  _props: { scope: string }
}

export type Columns = Column[]

export const columns: Columns = [
  {
    key: 'acc_id',
    label: 'Acc ID',
    _props: { scope: 'col' },
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
    label: 'View',
    _props: { scope: 'col' },
  },
]

type Row = {
  acc_id: number
  customer_name: string
  business_name: string
  equipment_name: string
  equipment_type: string
  service_type: string
  next_service: string
  _cellProps: { id: { scope: string } }
}

export type Rows = Row[]

export const rows: Rows = [
  {
    acc_id: 12345,
    customer_name: 'Ben Chapman',
    business_name: 'Test Business',
    equipment_name: 'Fronius',
    equipment_type: 'Mig',
    service_type: 'On Site',
    next_service: '23 June 2023',
    _cellProps: { id: { scope: 'row' } },
  },
  {
    acc_id: 12346,
    customer_name: 'Ben Chapman',
    business_name: 'Test Business',
    equipment_name: 'Fronius',
    equipment_type: 'Mig',
    service_type: 'Workshop',
    next_service: '23 June 2023',
    _cellProps: { id: { scope: 'row' } },
  },
  {
    acc_id: 12347,
    customer_name: 'Steve Tiglerton',
    business_name: 'Test Business',
    equipment_name: 'Fronius',
    equipment_type: 'Mig',
    service_type: 'Workshop',
    next_service: '23 June 2023',
    _cellProps: { id: { scope: 'row' } },
  },
]
