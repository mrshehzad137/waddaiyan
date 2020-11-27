import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../AuthTest';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CHeaderNavLink,
  CRow,
  CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import adminImage from '../../assets/img/imag1.png'
class CustomerLogin extends Component {
  
  constructor(props){
    super(props);
    this.state={
        email:'',
        password:'',
    }
    this.auth = new AuthService();
      
        this.submit= this.submit.bind(this);
        this.onChange=this.onChange.bind(this);
    }
    
    componentWillMount(){
      if(this.auth.loggedIn())
          this.props.history.replace('/vendordashboard');
  }
    

  onChange(e){
          
          this.setState({[e.target.name]: e.target.value});
  }
      
    submit(e){
        e.preventDefault();
                const data = {
                    email:this.state.email,
                    password:this.state.password
                };
                this.auth.login('/api/vendor/signin',data)
                .then(res => {
                    this.props.history.replace('/vendordashboard');
                })
                .catch(err => {
                    alert("User name or password incorrect");  
                })
    }
  render() {
    return (
      <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1 style={{color:'pink'}}>Commercial User Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="email" placeholder="Username" autoComplete="username"
                       onChange={(event) => this.setState({email: event.target.value})} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password" autoComplete="current-password"
                       onChange={(event) => this.setState({password: event.target.value})} />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton onClick={this.submit}  style={{color:'pink'}}>Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CHeaderNavLink to="/customer/signup" style={{color:'pink'}}>Signup</CHeaderNavLink>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol xs="8">
                        <p>Are you customer ?</p>
                      </CCol>
                      <CCol xs="4" className="text-left">
                        <CHeaderNavLink to="/user/login" style={{color:'pink'}}>Click Here?</CHeaderNavLink>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol xs="8">
                      </CCol>
                      <CCol xs="4" className="text-left">
                        <CHeaderNavLink to="/admin/login" style={{color:'pink'}}>Admin</CHeaderNavLink>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white " style={{ width: '44%',padding:'0px',background:'pink'}}>
                <CCardBody>
                  <img src={adminImage} width="100%" height="100%" ></img>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
      </div>
    );
  }
}

export default CustomerLogin;
