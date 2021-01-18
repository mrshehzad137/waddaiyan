import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../AuthTest';
import {
  CCard,
  CCardBody,
  CCol,
  CCardFooter,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from 'axios'
import TheHeader from '../../containers/TheHeader';
import withAuth from '../withAuth';
class VProfile extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
          user:{},
        };
      }

    
      componentWillMount(){
        const useris=localStorage.getItem('uid');
        axios.get('/api/vendor/get/'+useris)
        .then(res=>{
          console.log(res);
          this.setState({
            user:res.data.vendor
          })
        })
        .catch(err=>{
          console.log(err);
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
                <h1 style={{textAlign:'center',color:'#000015'}}>User Profile</h1>
                <CCard>
                      <CCardBody>
                <form style={{textAlign:'center',marginTop:'3%'}}>
                    <img src={"https://waddaiyan-backend.herokuapp.com/"+(this.state.user.profileUrl?this.state.user.profileUrl:'')} alt="No pics found" width="180" height="200" style={{border:'1px solid red',borderRadius:'50%',textAlign:'center'}}/>
                    <CRow style={{textAlign:'left',width:'100%',marginLeft:'25%',marginTop:'5%'}}>
                        <CCol md="2">
                            <h5 style={{textAlign:'right'}}>Name</h5>
                        </CCol>
                        <CCol md="10">
                            <h5>{this.state.user.name}</h5>
                        </CCol> 
                    </CRow>
                    <CRow style={{textAlign:'left',width:'100%',marginLeft:'25%'}}>
                        <CCol md="2">
                            <h5 style={{textAlign:'right'}}>email</h5>
                        </CCol>
                        <CCol md="10">
                            <h5>{this.state.user.email}</h5>
                        </CCol> 
                    </CRow>
                    <CRow style={{textAlign:'left',width:'100%',marginLeft:'25%'}}>
                        <CCol md="2">
                            <h5 style={{textAlign:'right'}}>Status</h5>
                        </CCol>
                        <CCol md="10">
                            <h5>{this.state.user.status}</h5>
                        </CCol> 
                    </CRow>
                </form>
                </CCardBody>
                <CCardFooter><a href="/user/vedit" style={{float:'right'}}>Edit Profile</a></CCardFooter>
                </CCard>
               </div>
               
                
            </div>
    );
  }
}

export default withAuth(VProfile);
