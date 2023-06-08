import { useSelector, useDispatch } from 'react-redux'

import { CNavGroup, CNavItem, CNavLink, CSidebar, CSidebarBrand, CSidebarNav } from '@coreui/react'

import SimpleBar from 'simplebar-react'
import '@coreui/coreui/dist/css/coreui.min.css'

import Link from 'next/link'

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
          <Link legacyBehavior href="/" className="text-decoration-none">
            <CNavLink style={{ cursor: 'pointer' }}>Dashboard</CNavLink>
          </Link>
          <Link legacyBehavior href="/service" className="pointer-event text-decoration-none">
            <CNavLink style={{ cursor: 'pointer', visibility: unfoldable ? 'hidden' : 'visible' }}>
              Service
            </CNavLink>
          </Link>
          <CNavGroup toggler="Orders">
            <CNavItem href="/orders/all">All Orders</CNavItem>
          </CNavGroup>

          <CNavGroup toggler="Products">
            <CNavItem href="/products">Products</CNavItem>
          </CNavGroup>

          <CNavGroup toggler="Customers">
            <CNavItem href="/customers">Customers</CNavItem>
          </CNavGroup>

          <CNavItem href="/admin">Admin</CNavItem>
        </SimpleBar>
      </CSidebarNav>
    </CSidebar>
  )
}

export default Sidebar
