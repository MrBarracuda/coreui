"use client"
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'

// import { AppBreadcrumb } from './index'
// import { AppHeaderDropdown } from './header/index'
// import Link from "next/link";

const Header = () => {
  const dispatch = useDispatch()
  // @ts-ignore
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none">
          <CIcon icon={''} height={48}/>
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink href="/">
              Dashboard
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="/service">Service</CNavLink>
          </CNavItem>
          <CNavItem>
            {/*<CNavLink href="#">Settings</CNavLink>*/}
          </CNavItem>
        </CHeaderNav>
      </CContainer>
      {/*<CHeaderDivider />*/}
      {/*<CContainer fluid>*/}
      {/*  <AppBreadcrumb />*/}
      {/*</CContainer>*/}
    </CHeader>
  )
}

export default Header
