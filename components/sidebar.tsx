import { useSelector, useDispatch } from 'react-redux'

import {CNavLink, CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler} from '@coreui/react'

import SimpleBar from 'simplebar-react'
import '@coreui/coreui/dist/css/coreui.min.css'

import Link from "next/link";

const Sidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state: any) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state: any) => state.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" />
      <CSidebarNav>
        <SimpleBar>
          <Link legacyBehavior href='/' className='text-decoration-none'>
            <CNavLink style={{cursor: 'pointer'}}>
              Dashboard
            </CNavLink>
          </Link>
            <Link legacyBehavior href='/service' className='pointer-event text-decoration-none'>
              <CNavLink style={{cursor: 'pointer', visibility: unfoldable ? 'hidden' : 'visible'}}>
              Service
              </CNavLink>
            </Link>
          {/*<SidebarNav items={nav} />*/}
        </SimpleBar>
      </CSidebarNav>
    </CSidebar>
  )
}

export default Sidebar
