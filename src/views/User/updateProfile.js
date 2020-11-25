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
  CInput
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import TheHeader from '../../containers/TheHeader';
import withAuth from '../withAuth';
class UpdateProfile extends Component {
  
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
                <h1 style={{textAlign:'center',color:'#000015'}}>Update Profile</h1>
                <CCard>
                      <CCardBody>
                <form style={{textAlign:'center',marginTop:'3%'}}>
                    <img src="https://www.gamedesigning.org/wp-content/uploads/2020/01/Saul-Bass.jpg" width="180" height="200" style={{border:'1px solid red',borderRadius:'50%',textAlign:'center'}}/>
                    <CInput
                            type="file"
                            id="nf-event"
                            name="nf-event"
                            placeholder="Enter first name.."
                            autoComplete="event"
                            style={{textAlign:'center',width:'30%',marginLeft:'25%',marginTop:'2%'}}
                    />
                    <CRow style={{textAlign:'left',width:'100%',marginLeft:'25%',marginTop:'5%'}}>
                        <CFormGroup>
                            <CLabel htmlFor="nf-event">User First Name:</CLabel>
                            <CInput
                            type="text"
                            id="nf-event"
                            name="nf-event"
                            placeholder="Enter first name.."
                            autoComplete="event"
                            />
                        </CFormGroup>
                    </CRow>
                    <CRow style={{textAlign:'left',width:'100%',marginLeft:'25%'}}>
                    <CFormGroup>
                            <CLabel htmlFor="nf-event">User Last Name:</CLabel>
                            <CInput
                            type="text"
                            id="nf-event"
                            name="nf-event"
                            placeholder="Enter last name.."
                            autoComplete="event"
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
                            />
                        </CFormGroup>
                    </CRow>
                    <CRow style={{textAlign:'left',width:'100%',marginLeft:'25%'}}>
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
                    </CRow>
                </form>
                </CCardBody>
                <CCardFooter><a href="/" style={{float:'right'}}>Update Profile</a></CCardFooter>
                </CCard>
               </div>
               
                
            </div>
    );
  }
}

export default withAuth(UpdateProfile);
