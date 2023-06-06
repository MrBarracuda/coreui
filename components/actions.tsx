import {CButton, CFormInput} from "@coreui/react";
import styles from "@/app/page.module.css";


export default function Actions() {

  return (
    <div className={styles.actions}>
      <div className={styles.searchWrapper}>
        <CButton size="sm" style={{marginRight: '10px'}} color="danger">Bookings</CButton>
        <CButton size="sm" color="light">Status</CButton>
      </div>

      <div className={styles.searchWrapper} style={{display: "flex"}}>
        <CButton size="sm" style={{marginRight: '10px'}} color="success">Book a Service</CButton>
        <CFormInput size="sm" placeholder="Search Service" />
      </div>
    </div>
  )
}