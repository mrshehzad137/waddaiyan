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

class Venue extends Component {
  
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

        <body className="app" >
               <TheHeader/>
          <div style={{marginTop:180 ,marginLeft:35,marginRight:35}}>  
         
            <CRow>
            <CCol xs="12" sm="6" md="3">
          <CCard>
            <CCardBody style={{padding:0}}>
            <CLink to="./staticdetailPage"> <img  src={hallimage1} style={{width:300,height:200,}}></img></CLink>
            </CCardBody>
            <CCardFooter  style={{padding:0}}>
                <div style={{borderBottom:'1px dashed grey'}}>
                <div style={{display:'flex' ,}}>
                    <p style={{fontWeight:'bold',padding:8}}>Johar Complex</p>
            
                    <p style={{float:'right',color:'green',backgroundColor:'yellow',width:60,textAlign:'center',marginLeft:100,padding:8}}>****4.0</p>
                </div>
                <div style={{display:'flex',lineHeight:0,marginBottom:5, marginLeft:0,marginRight:0,padding:8}}>
                    <p>Lahore</p>
                    <p style={{float:'right',color:'green',backgroundColor:'yellow',width:60,textAlign:'center',marginLeft:160,}}>8 reviews</p>         
                           </div>
                           </div>

                           <div style={{justifyContent:'space-between' ,display:'flex',padding:8,paddingTop:10}}>
                           <p style={{color:'#E92E77',fontWeight:'bold'}}>1500 per plate</p>
                           <img src={bestprice}></img>
                           </div>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="3">
        <CCard>
            <CCardBody style={{padding:0}}>
            <CLink to="./staticdetailPage"> <img  src={hallimage2} style={{width:300,height:200,}}></img></CLink>
            </CCardBody>
            <CCardFooter  style={{padding:0}}>
                <div style={{borderBottom:'1px dashed grey'}}>
                <div style={{display:'flex' ,}}>
                    <p style={{fontWeight:'bold',padding:8}}>Johar Complex</p>
            
                    <p style={{float:'right',color:'green',backgroundColor:'yellow',width:60,textAlign:'center',marginLeft:100,padding:8}}>****4.0</p>
                </div>
                <div style={{display:'flex',lineHeight:0,marginBottom:5, marginLeft:0,marginRight:0,padding:8}}>
                    <p>Lahore</p>
                    <p style={{float:'right',color:'green',backgroundColor:'yellow',width:60,textAlign:'center',marginLeft:160,}}>8 reviews</p>         
                           </div>
                           </div>

                           <div style={{justifyContent:'space-between' ,display:'flex',padding:8,paddingTop:10}}>
                           <p style={{color:'#E92E77',fontWeight:'bold'}}>1500 per plate</p>
                           <img src={bestprice}></img>
                           </div>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="3">
        <CCard>
            <CCardBody style={{padding:0}}>
            <CLink to="./staticdetailPage"> <img  src={hallimage} style={{width:300,height:200,}}></img></CLink>
            </CCardBody>
            <CCardFooter  style={{padding:0}}>
                <div style={{borderBottom:'1px dashed grey'}}>
                <div style={{display:'flex' ,}}>
                    <p style={{fontWeight:'bold',padding:8}}>Johar Complex</p>
            
                    <p style={{float:'right',color:'green',backgroundColor:'yellow',width:60,textAlign:'center',marginLeft:100,padding:8}}>****4.0</p>
                </div>
                <div style={{display:'flex',lineHeight:0,marginBottom:5, marginLeft:0,marginRight:0,padding:8}}>
                    <p>Lahore</p>
                    <p style={{float:'right',color:'green',backgroundColor:'yellow',width:60,textAlign:'center',marginLeft:160,}}>8 reviews</p>         
                           </div>
                           </div>

                           <div style={{justifyContent:'space-between' ,display:'flex',padding:8,paddingTop:10}}>
                           <p style={{color:'#E92E77',fontWeight:'bold'}}>1500 per plate</p>
                           <img src={bestprice}></img>
                           </div>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="3">
        <CCard>
            <CCardBody style={{padding:0}}>
            <CLink to="./staticdetailPage"> <img  src={hallimage3} style={{width:300,height:200,}}></img></CLink>
            </CCardBody>
            <CCardFooter  style={{padding:0}}>
                <div style={{borderBottom:'1px dashed grey'}}>
                <div style={{display:'flex' ,}}>
                    <p style={{fontWeight:'bold',padding:8}}>Johar Complex</p>
            
                    <p style={{float:'right',color:'green',backgroundColor:'yellow',width:60,textAlign:'center',marginLeft:100,padding:8}}>****4.0</p>
                </div>
                <div style={{display:'flex',lineHeight:0,marginBottom:5, marginLeft:0,marginRight:0,padding:8}}>
                    <p>Lahore</p>
                    <p style={{float:'right',color:'green',backgroundColor:'yellow',width:60,textAlign:'center',marginLeft:160,}}>8 reviews</p>         
                           </div>
                           </div>

                           <div style={{justifyContent:'space-between' ,display:'flex',padding:8,paddingTop:10}}>
                           <p style={{color:'#E92E77',fontWeight:'bold'}}>1500 per plate</p>
                           <img src={bestprice}></img>
                           </div>
            </CCardFooter>
          </CCard>
        </CCol>
        </CRow>
        <CRow>
            <CCol xs="12" sm="6" md="3">
          <CCard>
            <CCardBody style={{padding:0}}>
          <CLink to="./staticdetailPage"> <img  src={hallimage1} style={{width:300,height:200,}}></img></CLink>
            </CCardBody>
            <CCardFooter  style={{padding:0}}>
                <div style={{borderBottom:'1px dashed grey'}}>
                <div style={{display:'flex' ,}}>
                    <p style={{fontWeight:'bold',padding:8}}>Johar Complex</p>
            
                    <p style={{float:'right',color:'green',backgroundColor:'yellow',width:60,textAlign:'center',marginLeft:100,padding:8}}>****4.0</p>
                </div>
                <div style={{display:'flex',lineHeight:0,marginBottom:5, marginLeft:0,marginRight:0,padding:8}}>
                    <p>Lahore</p>
                    <p style={{float:'right',color:'green',backgroundColor:'yellow',width:60,textAlign:'center',marginLeft:160,}}>8 reviews</p>         
                           </div>
                           </div>

                           <div style={{justifyContent:'space-between' ,display:'flex',padding:8,paddingTop:10}}>
                           <p style={{color:'#E92E77',fontWeight:'bold'}}>1500 per plate</p>
                           <img src={bestprice}></img>
                           </div>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="3">
        <CCard>
            <CCardBody style={{padding:0}}>
            <CLink to="./staticdetailPage"> <img  src={hallimage2} style={{width:300,height:200,}}></img></CLink>
            </CCardBody>
            <CCardFooter  style={{padding:0}}>
                <div style={{borderBottom:'1px dashed grey'}}>
                <div style={{display:'flex' ,}}>
                    <p style={{fontWeight:'bold',padding:8}}>Johar Complex</p>
            
                    <p style={{float:'right',color:'green',backgroundColor:'yellow',width:60,textAlign:'center',marginLeft:100,padding:8}}>****4.0</p>
                </div>
                <div style={{display:'flex',lineHeight:0,marginBottom:5, marginLeft:0,marginRight:0,padding:8}}>
                    <p>Lahore</p>
                    <p style={{float:'right',color:'green',backgroundColor:'yellow',width:60,textAlign:'center',marginLeft:160,}}>8 reviews</p>         
                           </div>
                           </div>

                           <div style={{justifyContent:'space-between' ,display:'flex',padding:8,paddingTop:10}}>
                           <p style={{color:'#E92E77',fontWeight:'bold'}}>1500 per plate</p>
                           <img src={bestprice}></img>
                           </div>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="3">
        <CCard>
            <CCardBody style={{padding:0}}>
            <CLink to="./staticdetailPage"> <img  src={hallimage} style={{width:300,height:200,}}></img></CLink>
            </CCardBody>
            <CCardFooter  style={{padding:0}}>
                <div style={{borderBottom:'1px dashed grey'}}>
                <div style={{display:'flex' ,}}>
                    <p style={{fontWeight:'bold',padding:8}}>Johar Complex</p>
            
                    <p style={{float:'right',color:'green',backgroundColor:'yellow',width:60,textAlign:'center',marginLeft:100,padding:8}}>****4.0</p>
                </div>
                <div style={{display:'flex',lineHeight:0,marginBottom:5, marginLeft:0,marginRight:0,padding:8}}>
                    <p>Lahore</p>
                    <p style={{float:'right',color:'green',backgroundColor:'yellow',width:60,textAlign:'center',marginLeft:160,}}>8 reviews</p>         
                           </div>
                           </div>

                           <div style={{justifyContent:'space-between' ,display:'flex',padding:8,paddingTop:10}}>
                           <p style={{color:'#E92E77',fontWeight:'bold'}}>1500 per plate</p>
                           <img src={bestprice}></img>
                           </div>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="3">
        <CCard>
            <CCardBody style={{padding:0}}>
            <CLink to="./staticdetailPage"> <img  src={hallimage3} style={{width:300,height:200,}}></img></CLink>
            </CCardBody>
            <CCardFooter  style={{padding:0}}>
                <div style={{borderBottom:'1px dashed grey'}}>
                <div style={{display:'flex' ,}}>
                    <p style={{fontWeight:'bold',padding:8}}>Johar Complex</p>
            
                    <p style={{float:'right',color:'green',backgroundColor:'yellow',width:60,textAlign:'center',marginLeft:100,padding:8}}>****4.0</p>
                </div>
                <div style={{display:'flex',lineHeight:0,marginBottom:5, marginLeft:0,marginRight:0,padding:8}}>
                    <p>Lahore</p>
                    <p style={{float:'right',color:'green',backgroundColor:'yellow',width:60,textAlign:'center',marginLeft:160,}}>8 reviews</p>         
                           </div>
                           </div>

                           <div style={{justifyContent:'space-between' ,display:'flex',padding:8,paddingTop:10}}>
                           <p style={{color:'#E92E77',fontWeight:'bold'}}>1500 per plate</p>
                           <img src={bestprice}></img>
                           </div>
            </CCardFooter>
          </CCard>
        </CCol>
        </CRow>
          </div>
      </body>
    );
  }
}

export default withAuth(Venue);
