type ServiceTableProps = {

}
export default function ServiceTable({}: ServiceTableProps) {

  return (
    <div className='pt-25 divider pb-25'>
      <h6 className='pb-25 fw-bold' style={{fontSize: '13px'}}>Red = Replace Amber = Advisory Green = Visually OK Blank = Not Checked</h6>

    </div>
  )
}