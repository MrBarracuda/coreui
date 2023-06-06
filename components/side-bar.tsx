"use client"
import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'


import SimpleBar from 'simplebar-react'
import {AppSidebarNav} from "@/components/AppSidebarNav";
// import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '@/config/_nav'
import Link from "next/link";

const SideBar = () => {
  const dispatch = useDispatch()
  // @ts-ignore
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  // @ts-ignore
  const sidebarShow = useSelector((state) => state.sidebarShow)

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
        <CIcon className="sidebar-brand-full" icon={'logoNegative'} height={35} />
        <CIcon className="sidebar-brand-narrow" icon={'sygnet'} height={35} />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <Link href='/' >Dashboard</Link>
          <Link href='/service' >service</Link>
          {/*<AppSidebarNav items={navigation} />*/}
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}

export default SideBar
