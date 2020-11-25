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
import TheHeader from '../../containers/TheHeader';
import withAuth from '../withAuth';
class Profile extends Component {
  
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

    // componentWillMount(){
    //     if(this.auth.loggedIn())
    //         this.props.history.replace('/AdminDashboard');
    // }
      

    onChange(e){
            
            this.setState({[e.target.name]: e.target.value});
    }
        
    submit(e){

        e.preventDefault();
            
                const data = {

                    email:this.state.email,
                    password:this.state.password
                };

                this.auth.login('https://fyp-ssrs.herokuapp.com/api/admin/signin',data)
                .then(res => {
                    this.props.history.replace('/AdminDashboard');
                })
                .catch(err => {
                    alert("User name or password incorrect");
                    
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
                    <img src="https://www.gamedesigning.org/wp-content/uploads/2020/01/Saul-Bass.jpg" width="180" height="200" style={{border:'1px solid red',borderRadius:'50%',textAlign:'center'}}/>
                    <CRow style={{textAlign:'left',width:'100%',marginLeft:'25%',marginTop:'5%'}}>
                        <CCol md="2">
                            <h5 style={{textAlign:'right'}}>First Name</h5>
                        </CCol>
                        <CCol md="10">
                            <h5>Mr. Atif</h5>
                        </CCol> 
                    </CRow>
                    <CRow style={{textAlign:'left',width:'100%',marginLeft:'25%'}}>
                        <CCol md="2">
                            <h5 style={{textAlign:'right'}}>Last Name</h5>
                        </CCol>
                        <CCol md="10">
                            <h5>Aslam</h5>
                        </CCol> 
                    </CRow>
                    <CRow style={{textAlign:'left',width:'100%',marginLeft:'25%'}}>
                        <CCol md="2">
                            <h5 style={{textAlign:'right'}}>Email</h5>
                        </CCol>
                        <CCol md="10">
                            <h5>atif@mailinator.com</h5>
                        </CCol> 
                    </CRow>
                    <CRow style={{textAlign:'left',width:'100%',marginLeft:'25%'}}>
                        <CCol md="2">
                            <h5 style={{textAlign:'right'}}>Events count</h5>
                        </CCol>
                        <CCol md="10">
                            <h5>10</h5>
                        </CCol> 
                    </CRow>
                </form>
                </CCardBody>
                <CCardFooter><a href="/user/edit" style={{float:'right'}}>Edit Profile</a></CCardFooter>
                </CCard>
               </div>
               
                
            </div>
    );
  }
}

export default withAuth(Profile);
