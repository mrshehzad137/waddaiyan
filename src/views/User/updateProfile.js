import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../AuthTest';
import {
  CCard,
  CCardBody,
  CCol,
  CCardFooter,
  CRow,
  CFormGroup,
  CLabel,
  CInput,
  CButton
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import TheHeader from '../../containers/TheHeader';
import withAuth from '../withAuth';
import Axios from 'axios';
class UpdateProfile extends Component {
  
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

    onChange(e){       
            this.setState({[e.target.name]: e.target.value});
    }
    submit(e){
        e.preventDefault();
        const useris=localStorage.getItem('uid');
                const data = {
                    name:this.state.name,
                    email:this.state.email,
                    password:this.state.password,
                    id:useris
                };

                Axios.put('/api/user/update',data)
                .then(res => {
                    alert("Vendor Updated Successfully")
                 })
                 .catch(err => {
                     alert("Vendor Updated Failed");
                     
                 })

    }
  
  render() {
    return (
            <div>  
                <div>
                <TheHeader/>
                </div>
                
               <div>
               <h1>Under Developed</h1>
               </div>
               <div style={{backgroundColor:'#94A2B7',width:'50%',marginLeft:'25%',marginTop:'2%'}}>
                <h1 style={{textAlign:'center',color:'#000015'}}>Update Profile</h1>
                <CCard>
                      <CCardBody>
                <form style={{textAlign:'center',marginTop:'3%'}}>
                    <img src="https://www.gamedesigning.org/wp-content/uploads/2020/01/Saul-Bass.jpg" width="180" height="200" style={{border:'1px solid red',borderRadius:'50%',textAlign:'center'}}/>
             
                    <CRow style={{textAlign:'left',width:'100%',marginLeft:'25%',marginTop:'5%'}}>
                        <CFormGroup>
                            <CLabel htmlFor="nf-event">User  Name:</CLabel>
                            <CInput
                            type="text"
                            id="nf-event"
                            name="nf-event"
                            placeholder="Enter first name.."
                            autoComplete="event"
                            onChange={(event) => this.setState({name:event.target.value})}
                            />
                        </CFormGroup>
                    </CRow>
                    <CRow style={{textAlign:'left',width:'100%',marginLeft:'25%'}}>
                        <CFormGroup>
                            <CLabel htmlFor="nf-event">email:</CLabel>
                            <CInput
                            type="text"
                            id="nf-event"
                            name="nf-event"
                            placeholder="Enter user email.."
                            autoComplete="event"
                            onChange={(event) => this.setState({email:event.target.value})}
                            />
                        </CFormGroup>
                    </CRow>
                    <CRow style={{textAlign:'left',width:'100%',marginLeft:'25%'}}>
                        <CFormGroup>
                            <CLabel htmlFor="nf-event">Password:</CLabel>
                            <CInput
                            type="password"
                            id="nf-event"
                            name="nf-event"
                            placeholder="Enter user email.."
                            autoComplete="event"
                            onChange={(event) => this.setState({password:event.target.value})}
                            />
                        </CFormGroup>
                    </CRow>
                    {/* <CRow style={{textAlign:'left',width:'100%',marginLeft:'25%'}}>
                        <CFormGroup>
                            <CLabel htmlFor="nf-event">Confirm Password:</CLabel>
                            <CInput
                            type="password"
                            id="nf-event"
                            name="nf-event"
                            placeholder="Enter user email.."
                            autoComplete="event"
                            />
                        </CFormGroup>
                    </CRow> */}
                </form>
                </CCardBody>
                <CCardFooter><CButton color="secondary" onClick={this.submit} style={{float:'right'}}>Update Profile</CButton></CCardFooter>
                </CCard>
               </div>
               
                
            </div>
    );
  }
}

export default withAuth(UpdateProfile);
