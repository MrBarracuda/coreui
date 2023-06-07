import {CButton, CCol, CContainer, CFormInput, CRow} from "@coreui/react";
import styles from "@/app/page.module.css";


export default function Actions() {

  return (
    // <CContainer>
    //   <CRow>
    //     <CCol>
    //       <CButton size="sm" style={{marginRight: '10px'}} color="danger">Bookings</CButton>
    //       <CButton size="sm" color="secondary">Status</CButton>
    //     </CCol>
    //     <CCol>
    //       <CButton size="sm" style={{marginRight: '10px'}} color="success">Book a Service</CButton>
    //       <CFormInput size="sm" placeholder="Search Service" />
    //     </CCol>
    //   </CRow>
    // </CContainer>

    <div className={styles.actions}>
      <div className={styles.searchWrapper}>
        <CButton size="sm" style={{marginRight: '10px', fontSize: '12px'}} color="danger">Bookings</CButton>
        <CButton size="sm" style={{fontSize: '12px'}} color="secondary">Status</CButton>
      </div>

      <div className={styles.searchWrapper} style={{display: "flex"}}>
        <CButton size="sm" style={{marginRight: '10px', fontSize: '12px', paddingInline: '60px !important'}} color="success">
          BookaService
        </CButton>
        <CFormInput size="sm" placeholder="Search Service" />
      </div>
    </div>
  )
}