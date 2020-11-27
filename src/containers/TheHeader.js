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
import logo from '../assets/img/logo.png'


import { 
  TheHeaderDropdown,
}  from './index'

const TheHeader = () => {
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
      
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
       
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
      
      <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/"><img src={logo} width="150"/></CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/user/venue" className="blinking1">Venues</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/user/vendor" className="blinking2">Vendors</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/user/events" className="blinking3">My Events</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/user/profile" className="blinking4">Settings</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/user/Bookinguser" className="blinking4">Bookings</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>

      <CHeaderNav className="px-3">
      <CHeaderNavItem className="px-3">
        </CHeaderNavItem>
        <TheHeaderDropdown/>
        </CHeaderNav>
        {/* <CButton><CHeaderNavLink to="/user/login" style={{display:user?'none':'inline'}}>Login</CHeaderNavLink></CButton> */}
    </CHeader>
  )
}

export default TheHeader
