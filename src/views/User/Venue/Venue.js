import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../../AuthTest';
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
  CCardFooter,
  CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
// import adminImage from '../../assets/img/imag1.png'
import hallimage from '../../../assets/img/hall.webp'
import hallimage1 from '../../../assets/img/hall1.webp'
import hallimage2 from '../../../assets/img/hall2.webp'
import hallimage3 from '../../../assets/img/hall3.webp'
import bestprice from '../../../assets/img/book-venue-shape-5.svg'
import withAuth from '../../withAuth';
import TheHeader from '../../../containers/TheHeader';
import Axios from 'axios'
const datapicture=[
  "https://image.shutterstock.com/image-photo/wedding-venue-260nw-604904363.jpg","https://i.insider.com/5e67f940235c1804fd14aba9?width=1100&format=jpeg&auto=webp","https://blog.e360.pk/wp-content/uploads/2020/03/Wedding-Venues-and-Vehicles-for-a-Memorable-Event.jpg","https://www.thestatesman.com/wp-content/uploads/2019/07/Wedding-Venue.jpg","https://blog.bridals.pk/wp-content/uploads/2019/02/Banner-2.jpg",
  "https://www.brides.com/thmb/0sOaZ3sx3JI5fdvHe3Gej0x813o=/3759x2114/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__brides__proteus__585acc1e54421cf15eb0e0b8__169-6741927d00934d1d942b4e2e8c2ab990.jpeg","https://gmgweddingservices.com/wp-content/uploads/2020/05/Wedding-Venue.jpg","https://blog.bridals.pk/wp-content/uploads/2018/10/reception-decor-hacks-banner.jpg","https://weddingpakistani.com/wp-content/uploads/2012/02/20-Best-Wedding-Venues-in-Pakistan.jpg","https://blog.radissonblu.com/wp-content/uploads/2019/07/Radisson-Blu-Hotell-Kuwait-wedding-veunue-on-boat-Al-Hashemi-II.jpg","https://cdn.diys.com/wp-content/uploads/2018/05/franscican-garden-wedding-venue.jpg","https://blog.bridals.pk/wp-content/uploads/2018/11/sems-2.jpg","https://i.pinimg.com/originals/9c/01/f5/9c01f50987a59c007d04c0a768fd6ebd.jpg",
]
class Venue extends Component {
  
  constructor(props){
    super(props);
    this.state={
        data:[]
    
    }
    this.auth = new AuthService();
      
    
    }

 

    componentDidMount (){
        Axios.get('/api/vendor/getall/venue')
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

        <body className="app" >
               <TheHeader/>
          <div style={{marginTop:180 ,marginLeft:35,marginRight:35}}>  
         
            <CRow>
            {this.state.data.map(x =>
            <CCol xs="12" sm="6" md="3">
          <CCard>
            <CCardBody style={{padding:0}}>
            <CLink to="./staticdetailPage"> <img src={datapicture[Math.floor(Math.random() * 12)]} style={{width:300,height:200,}}></img></CLink>
            </CCardBody>
            <CCardFooter  style={{padding:0}}>
                <div style={{borderBottom:'1px dashed grey'}}>
                <div style={{display:'flex' ,}}>
                    <p style={{fontWeight:'bold',padding:8}}>{x.name}</p>
            
                    <p style={{float:'right',color:'green',backgroundColor:'yellow',width:60,textAlign:'center',marginLeft:100,padding:8}}>****{x.rating}</p>
                </div>
                <div style={{display:'flex',lineHeight:0,marginBottom:5, marginLeft:0,marginRight:0,padding:8}}>
            <p>{x.location}</p>
                           </div>
                           </div>

                           <div style={{justifyContent:'space-between' ,display:'flex',padding:8,paddingTop:10}}>
                           <p style={{color:'#E92E77',fontWeight:'bold'}}>{x.description}</p>
                           <CLink to={`./booking/${x._id}`} > <CButton color="success" style={{ width: 100, height: 35 }} >Book</CButton></CLink>
                           </div>
            </CCardFooter>
          </CCard>
        </CCol>
          )}
  </CRow>
          </div>
      </body>
    );
  }
}

export default withAuth(Venue);
