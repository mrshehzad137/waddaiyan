import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CButton,
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import logo from '../../assets/img/logo.png'


import AdminHeaderDropDown from './headerDropdown';

const HeaderAdmin = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  const user = true;


  return (
    <CHeader withSubheader>
      
      <CHeaderBrand className="mx-auto d-lg-none" >
       
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
      
      <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/Admindashboard"><img src={logo} width="150"/></CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/Admindashboard" className="blinking1">Home</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/Admindashboard/venue" className="blinking1">Venues</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/Admindashboard/booking" className="blinking2">Booking</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/Admindashboard/customer" className="blinking2">Customer</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/Admindashboard/user" className="blinking2">User</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>

      <CHeaderNav className="px-3">
        <AdminHeaderDropDown/>
        </CHeaderNav>

    </CHeader>
  )
}

export default HeaderAdmin
