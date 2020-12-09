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
import Axios from 'axios';

class UserSignUp extends Component {
  
   
  constructor(props){
    super(props);
    this.state={
        name:'',
        email:'',
        password:'',
        confirmpassword:'',
        isemailvalid:true,
        isemail:true,
        isusername:true,
        ispassword:true,
        ispasswordmatch:true,
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
        var isvalid=false;
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(this.state.email)) {
          this.setState({isemailvalid:false})
        }else{
          this.setState({isemailvalid:true})
          isvalid=true;
        }
        if(this.state.email==''){
          this.setState({isemail:false})
        }else{
          this.setState({isemail:true})
          isvalid=true
        }
        if(this.state.name==''){
          this.setState({isusername:false})
        }else{
          this.setState({isusername:true})
          isvalid=true
        }

        if(this.state.password == '' || this.state.confirmpassword == ''){
          this.setState({ispassword:false});
          return;
        }else{
          this.setState({ispassword:true})
          if(this.state.password != this.state.confirmpassword){
            this.setState({ispasswordmatch:false})
            isvalid=false
            return;
          }else{
            isvalid=true
            this.setState({ispasswordmatch:true})
          }
        }

        const data = {
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
        };


        if(isvalid){
          Axios.post('/api/user/signup',data)
          .then(res => {
              this.props.history.replace('/user/login');
          })
          .catch(err => {
              alert("User name or password incorrect");
              
          })
        }
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
                    <h1>Register Customer/User</h1>
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
                    <div style={{color:'red',display:(this.state.isusername?'none':'inherit')}}>Please provide a username is required </div>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>@</CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="email" placeholder="Email" autoComplete="email"
                       onChange={(event) => this.setState({email: event.target.value})} />
                    </CInputGroup>
                    <div style={{color:'red',display:(this.state.isemailvalid?'none':'inherit')}}>Please provide a valid email</div>
                    <div style={{color:'red',display:(this.state.isemail?'none':'inherit')}}>Please provide an email is required </div>
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
                      <CInput type="password" placeholder="Repeat password" autoComplete="new-password" 
                      onChange={(event) => this.setState({confirmpassword: event.target.value})}/>
                    </CInputGroup>
                    <div style={{color:'red',display:(this.state.ispassword?'none':'inherit')}}>Please provide a password and confirm password is required </div>
                    <div style={{color:'red',display:(this.state.ispasswordmatch?'none':'inherit')}}>Password did not match please provide try again..!!! </div>
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

export default UserSignUp;
