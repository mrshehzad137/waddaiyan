import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../../AuthTest';
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
import TheHeader from '../../../containers/HeaderVendor';
// import myevent from '../../assets/img/myevent.jpg'
import withAuth from '../../withAuth';
import Axios from 'axios';
 const datapicture=[
     "https://image.shutterstock.com/image-photo/wedding-venue-260nw-604904363.jpg","https://i.insider.com/5e67f940235c1804fd14aba9?width=1100&format=jpeg&auto=webp","https://blog.e360.pk/wp-content/uploads/2020/03/Wedding-Venues-and-Vehicles-for-a-Memorable-Event.jpg","https://www.thestatesman.com/wp-content/uploads/2019/07/Wedding-Venue.jpg","https://blog.bridals.pk/wp-content/uploads/2019/02/Banner-2.jpg",
     "https://www.brides.com/thmb/0sOaZ3sx3JI5fdvHe3Gej0x813o=/3759x2114/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__brides__proteus__585acc1e54421cf15eb0e0b8__169-6741927d00934d1d942b4e2e8c2ab990.jpeg","https://gmgweddingservices.com/wp-content/uploads/2020/05/Wedding-Venue.jpg","https://blog.bridals.pk/wp-content/uploads/2018/10/reception-decor-hacks-banner.jpg","https://weddingpakistani.com/wp-content/uploads/2012/02/20-Best-Wedding-Venues-in-Pakistan.jpg","https://blog.radissonblu.com/wp-content/uploads/2019/07/Radisson-Blu-Hotell-Kuwait-wedding-veunue-on-boat-Al-Hashemi-II.jpg","https://cdn.diys.com/wp-content/uploads/2018/05/franscican-garden-wedding-venue.jpg","https://blog.bridals.pk/wp-content/uploads/2018/11/sems-2.jpg","https://i.pinimg.com/originals/9c/01/f5/9c01f50987a59c007d04c0a768fd6ebd.jpg",
 ]
class Venuelist extends Component {
  
  constructor(props){
    super(props);
    this.state={
        data:[]
    
    }
    this.auth = new AuthService();
      
    
    }

 

    componentDidMount (){
        const useris=localStorage.getItem('uid');
        Axios.get(`/api/vendor/getall/venue/${useris}`)
        .then(res => {
         this.setState({data:res.data.venueList})
         console.log(this.state.data)
        })
        
        .catch(err => {
            alert("Venue get Failed");
            
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
               <div style={{marginTop:'2%',textAlign:'center',width:'90%'}}>
               <h1>My Venue</h1>
               </div>
               {this.state.data.map(x =>
               <CRow style={{width:'80%',marginLeft:'22%',marginTop:'5%'}}>
                  <CCol xs="12" sm="6" md="8">
                  <CCard>
                      <CCardBody>
                        <CRow>
                          <CCol md="5"><img src={datapicture[Math.floor(Math.random() * 12)]} width="100%" height="100%"/></CCol>
                          <CCol md="7">
                            <h5>{x.name}</h5>
                            <p>{x.description}</p>
                            <p>{x.location}</p>
                            <p>{x.charges} PKR <span style={{color:'red'}}>/per function</span></p>
                         
                          </CCol>
                        </CRow>
                      </CCardBody>
                      <CCardFooter >
                       
                      </CCardFooter>
                    </CCard>
                </CCol>
                </CRow>
                  )}
               
        </div>
    );
  }
}

export default withAuth(Venuelist);
