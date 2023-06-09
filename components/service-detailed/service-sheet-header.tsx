import {CFormCheck, CFormInput, CFormLabel} from "@coreui/react";

type ServiceSheetHeaderProps = {
  serviceType: string
  customerName: string
}
export default function ServiceSheetHeader({serviceType, customerName}: ServiceSheetHeaderProps) {

  return (
    <div className='pt-25 divider pb-25'>
      <h6 className='pb-25'>Service Sheet</h6>
      <div className="d-flex fw-bold align-items-baseline">
        <CFormCheck checked={serviceType === 'On Site'} reverse inline type="radio" name="inlineRadioOptions" id="inlineCheckbox1" value="On Site" label="On Site Service"/>
        <CFormCheck checked={serviceType === 'Workshop'} reverse inline type="radio" name="inlineRadioOptions" id="inlineCheckbox2" value="Workshop" label="Workshop Service"/>
        <CFormLabel htmlFor="technicianName" style={{marginRight: '10px', marginLeft: '20px'}}>technicianName</CFormLabel>
        <CFormInput size='sm' id="technicianName" readOnly type="text" placeholder={customerName} style={{width: '20%'}}/>
      </div>
    </div>
  )
}