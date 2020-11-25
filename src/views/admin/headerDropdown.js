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
import { useHistory } from 'react-router-dom';

const AdminHeaderDropDown = () => {
    const history = useHistory();
    
    // this.history.push('/admin/login');

    const logoutHandler = ()  => {
        history.push('/admin/login')
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
          <CIcon name="cil-user" className="mfe-2" /><CHeaderNavLink to="#">Profile</CHeaderNavLink>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-credit-card" className="mfe-2" /> 
          Payments
          <CBadge color="secondary" className="mfs-auto">$10</CBadge>
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem>
        <CHeaderNavLink onClick={logoutHandler}>Logout</CHeaderNavLink>
    
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AdminHeaderDropDown
