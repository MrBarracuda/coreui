'use client'
import { useSelector, useDispatch } from 'react-redux'
import { CContainer, CHeader, CHeaderNav } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilHamburgerMenu } from '@coreui/icons'

const Header = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state: any) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CIcon
            icon={cilHamburgerMenu}
            size="lg"
            style={{ marginLeft: sidebarShow && '210px', cursor: 'pointer' }}
            onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          />
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

export default Header
