import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {Nav, NavItem } from 'reactstrap';
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink
} from '@coreui/react'
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class Header extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <CHeaderBrand
          full={{ src: logo, width: 40, height: 30, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }} style={{width:'80px'}}
        />
        <h4 style={{color:"#375173",position:"absolute",left:"4%"}}><strong>SSRS APP</strong></h4>
        <Nav navbar >
          <NavItem className="px-3">
            <NavLink to="/" className="nav-link" >Home</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/about" className="nav-link">About</Link>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/terms" className="nav-link">Term & Conditions</Link>
          </NavItem>
        </Nav>
      </React.Fragment>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
