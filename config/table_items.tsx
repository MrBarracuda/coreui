import { CButton } from '@coreui/react'

type RowItem = {
  acc_id: number
  customer_name: string
  business_name: string
  equipment_name: string
  equipment_type: string
  service_type: string
  next_service: string
  btn_view: JSX.Element
  _cellProps: { id: { scope: string }; next_service: { className: string } }
}

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
    btn_view: (
      <CButton color="success" size="sm">
        View
      </CButton>
    ),
    _cellProps: { id: { scope: 'row' }, next_service: { className: 'green-cell' } },
  },
  {
    acc_id: 12346,
    customer_name: 'Ben Chapman',
    business_name: 'Test Business',
    equipment_name: 'Fronius',
    equipment_type: 'Mig',
    service_type: 'Workshop',
    next_service: '23 June 2023',
    btn_view: (
      <CButton color="success" size="sm">
        View
      </CButton>
    ),
    _cellProps: { id: { scope: 'row' }, next_service: { className: 'green-cell' } },
  },
  {
    acc_id: 12347,
    customer_name: 'Steve Tiglerton',
    business_name: 'Test Business',
    equipment_name: 'Fronius',
    equipment_type: 'Mig',
    service_type: 'Workshop',
    next_service: '23 June 2023',
    btn_view: (
      <CButton color="success" size="sm">
        View
      </CButton>
    ),
    _cellProps: { id: { scope: 'row' }, next_service: { className: 'green-cell' } },
  },
]

export default items
