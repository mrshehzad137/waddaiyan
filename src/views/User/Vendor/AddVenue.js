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
class AddVenue extends Component {
  
  constructor(props){
    super(props);
    this.state={
        name:'',
        description:'',
        location:'',
        data:[]
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
                    description:this.state.description,
                    location:this.state.location,
                    vendor:useris,
                };

                Axios.post('/api/vendor/create/venue',data)
                .then(res => {
                   alert("Venue Created Successfully")
                })
                .catch(err => {
                    alert("Venue Created Failed");
                    
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
               <CCard style={{width:'60%',marginLeft:'20%',marginTop:'4%'}}>
                <CCardHeader style={{textAlign:'center',backgroundColor:'#96e096'}}>
                  <h1>Create Venue</h1>
                </CCardHeader>
                <CCardBody>
                <CRow>
                  <CCol sm="12">
                    <CForm action="" method="post">
                      <CFormGroup>
                        <CLabel htmlFor="nf-event"
                        >Venue Name</CLabel>
                        <CInput
                          type="text"
                          id="nf-event"
                          name="nf-event"
                          placeholder="Enter event name.."
                          autoComplete="event"
                          onChange={(event) => this.setState({name:event.target.value})}
                        />
                      </CFormGroup>
                      {/* <CFormGroup>
                        <CLabel htmlFor="nf-event">Event Category</CLabel>
                        <CSelect style={{width:'50%'}}>
                          <option>Select Category</option>
                          <option>Wedding</option>
                          <option>Birth day</option>
                          <option>Aniversary</option>
                          <option>College Party</option>
                        </CSelect>
                      </CFormGroup> */}
                      <CFormGroup>
                      <CLabel htmlFor="nf-eventCat">Venue Details</CLabel>
                      <CTextarea name="nf-eventCat" id="nf-eventCat" rows="5"
                      onChange={(event) => this.setState({description:event.target.value})}>

                      </CTextarea>
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="nf-event">Location</CLabel>
                        <CSelect style={{width:'50%'}} onChange={(event) => this.setState({location:event.target.value})}>
                          <option>Select Location</option>
                          <option value="Lahore">Lahore</option>
                          <option value="Islamabad">Islamabad</option>
                          <option value="Sheikhupura">Sheikhupura</option>
                          <option value="Faislabad">Faislabad</option>
                        </CSelect>
                      </CFormGroup>
                     
                    </CForm>
                  </CCol>
                </CRow>
                </CCardBody>
                <CCardFooter>
                <CButton color="primary" onClick={this.submit}>Create Venue</CButton>
                </CCardFooter>
              </CCard>
        </div>
    );
  }
}

export default withAuth(AddVenue);
