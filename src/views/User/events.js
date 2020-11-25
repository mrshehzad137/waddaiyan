import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../AuthTest';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardFooter,
  CInputGroupText,
  CCol,
  CFormGroup,
  CForm,
  CInput,
  CLabel,
  CFormText,
  CInputGroupPrepend,
  CRow,
  CInputGroup,
  CSelect,
  CTextarea,
  CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import adminImage from '../../assets/img/imag1.png'
import TheHeader from '../../containers/TheHeader';
import myevent from '../../assets/img/myevent.jpg'
import withAuth from '../withAuth';

class Events extends Component {
  
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
               <div  style={{backgroundImage: `url(${myevent})`,height:"490px",width:'100%'}}>
                  <div style={{height:"490px",backgroundColor:"#12202f",opacity:"0.7"}}>
                  <div className="row" style={{marginLeft:"35%"}}> 
                    <h1 style={{color:"white",marginTop:"16%",marginBottom:"3%"}}>Mange Your Events</h1>
                    <h3></h3>
                  </div>
              </div>
              </div>
               </div>
               <div style={{marginTop:'2%',textAlign:'center',width:'90%'}}>
               <h1>My Events</h1>
               </div>
               <CRow style={{width:'80%',marginLeft:'22%',marginTop:'5%'}}>
                  <CCol xs="12" sm="6" md="8">
                  <CCard>
                      <CCardBody>
                        <CRow>
                          <CCol md="5"><img src="https://image.wedmegood.com/resized/300X/uploads/option_image/62/4-star-above-hotels.png" width="350"/></CCol>
                          <CCol md="7">
                            <h5>Hall: Grand Place Evenue</h5>
                            <p>Location: Aibak Block, Sher Shah Road، New Garden Town،, Lahore, Punjab 54600</p>
                            <p>Date: 07/12/2020</p>
                            <p>Peoples: 20 Invited persons</p>
                            <p>Vendor: Ali hassan</p>
                          </CCol>
                        </CRow>
                      </CCardBody>
                      <CCardFooter >
                        <a href="#" style={{float:'left'}}>Invite people</a>
                        <a href="#" style={{float:'right'}}>Manage</a>
                      </CCardFooter>
                    </CCard>
                </CCol>
                </CRow>
               <CCard style={{width:'60%',marginLeft:'20%',marginTop:'4%'}}>
                <CCardHeader style={{textAlign:'center',backgroundColor:'#96e096'}}>
                  <h1>Create Event</h1>
                </CCardHeader>
                <CCardBody>
                <CRow>
                  <CCol sm="12">
                    <CForm action="" method="post">
                      <CFormGroup>
                        <CLabel htmlFor="nf-event">Event Name</CLabel>
                        <CInput
                          type="text"
                          id="nf-event"
                          name="nf-event"
                          placeholder="Enter event name.."
                          autoComplete="event"
                        />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="nf-event">Event Category</CLabel>
                        <CSelect style={{width:'50%'}}>
                          <option>Select Category</option>
                          <option>Wedding</option>
                          <option>Birth day</option>
                          <option>Aniversary</option>
                          <option>College Party</option>
                        </CSelect>
                      </CFormGroup>
                      <CFormGroup>
                      <CLabel htmlFor="nf-eventCat">Event Details</CLabel>
                      <CTextarea name="nf-eventCat" id="nf-eventCat" rows="5">

                      </CTextarea>
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="nf-event">Location</CLabel>
                        <CSelect style={{width:'50%'}}>
                          <option>Select Location</option>
                          <option>Lahore</option>
                          <option>Islamabad</option>
                          <option>Sheikhupura</option>
                          <option>Faislabad</option>
                        </CSelect>
                      </CFormGroup>
                      <CFormGroup>
                      <CLabel htmlFor="nf-eventDate">Date</CLabel>
                        <CInput
                          type="date"
                          id="nf-eventDate"
                          name="nf-eventDate"
                          style={{width:'50%'}}
                        />
                      </CFormGroup>
                     
                    </CForm>
                  </CCol>
                </CRow>
                </CCardBody>
                <CCardFooter>
                <CButton color="primary">Create</CButton>
                </CCardFooter>
              </CCard>
        </div>
    );
  }
}

export default withAuth(Events);
