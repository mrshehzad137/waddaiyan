import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CHeaderNavLink,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import AuthService from "../views/AuthTest";

const TheHeaderDropdown = () => {
  const Auth = new AuthService();

  const logoutHandler = ()  =>{

    Auth.logout();
    
    window.location.reload(false);
  }
  
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={'avatars/6.jpg'}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Settings</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" /><CHeaderNavLink to="/user/profile">Profile</CHeaderNavLink>
        </CDropdownItem>
        <CDropdownItem>
        <CHeaderNavLink onClick= {logoutHandler}>Logout</CHeaderNavLink>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
