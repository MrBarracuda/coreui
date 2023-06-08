import { CButton, CFormInput } from '@coreui/react'
import styles from '@/app/page.module.css'
import { cilSearch } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

export default function Actions() {
  return (
    <div className={styles.actions}>
      <div className={styles.searchWrapper}>
        <CButton size="sm" style={{ marginRight: '10px', fontSize: '12px' }} color="danger">
          Bookings
        </CButton>
        <CButton size="sm" style={{ fontSize: '12px' }} color="secondary">
          Status
        </CButton>
      </div>

      <div className="d-inline-flex">
        <CButton size="sm" style={{ marginRight: '10px', fontSize: '12px' }} color="success">
          Book a Service
        </CButton>
        <div>
          <div className="position-relative">
            <CIcon
              icon={cilSearch}
              className="position-absolute"
              style={{ top: '6px', left: '8px' }}
            />
            <CFormInput size="sm" placeholder="Search Service" style={{ paddingLeft: '35px' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
