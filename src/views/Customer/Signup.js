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
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import adminImage from '../../assets/img/imag1.png'
import Axios from 'axios';
class CustomerSignUp extends Component {
  
  constructor(props){
    super(props);
    this.state={
        name:'',
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
                    name:this.state.name,
                    email:this.state.email,
                    password:this.state.password
                };

                Axios.post('/api/vendor/signup',data)
                .then(res => {
                    this.props.history.replace('/customer/login');
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
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Username" autoComplete="username" 
                    onChange={(event) => this.setState({name: event.target.value})}/>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Email" autoComplete="email" 
                    onChange={(event) => this.setState({email: event.target.value})}/>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Password" autoComplete="new-password" 
                        onChange={(event) => this.setState({password: event.target.value})}/>
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Repeat password" autoComplete="new-password" />
                  </CInputGroup>
                  <CButton color="success" block onClick={this.submit}>Create Account</CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
    );
  }
}

export default CustomerSignUp;
