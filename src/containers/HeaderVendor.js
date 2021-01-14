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
  VendorHeaderDropDown,
}  from './index'

const HeaderVendor = () => {
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
          <CHeaderNavLink ><img src={logo} width="150"/></CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/vendordashboard" className="blinking2">Bookings</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/user/venuelist" className="blinking1">Venues</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/user/AddVenue" className="blinking2">Add Venue</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/user/AddRole" className="blinking2">Add Role</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/user/Createpromo" className="blinking2">Promo</CHeaderNavLink>
        </CHeaderNavItem>

      </CHeaderNav>

      <CHeaderNav className="px-3">
        <VendorHeaderDropDown/>
        </CHeaderNav>

    </CHeader>
  )
}

export default HeaderVendor
