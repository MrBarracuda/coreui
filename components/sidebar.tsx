import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import SimpleBar from 'simplebar-react'
import '@coreui/coreui/dist/css/coreui.min.css'

import nav from '../config/nav'
import {logoNegative} from "@/assets/brand/logo-negative";
import {sygnet} from "@/assets/brand/sygnet";
import SidebarNav from "@/components/sidebar-nav";

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
      <CSidebarBrand className="d-none d-md-flex">
        <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} />
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          {/*<SidebarNav items={nav} />*/}
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}

export default Sidebar
