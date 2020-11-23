import React, { Component } from 'react';
import { 
  CRow,
  CCardFooter,
  CCardBody,
  CCard,
  CCol,
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import TheHeader from './TheHeader';
import hallimage from '../assets/img/hall.webp'
import hallimage1 from '../assets/img/hall1.webp'
import hallimage2 from '../assets/img/hall2.webp'
import hallimage3 from '../assets/img/hall3.webp'
import bestprice from '../assets/img/book-venue-shape-5.svg'

class Detailpage extends Component {
  render() {
    return (
        <body className="app" >
               <TheHeader/>
          <div style={{marginTop:180 ,marginLeft:35,marginRight:35}}>  
         
            <CRow>
            <CCol xs="12" sm="6" md="3">
          <CCard>
            <CCardBody style={{padding:0}}>
           <img src={hallimage1} style={{width:300,height:200,}}></img>
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
           <img src={hallimage2} style={{width:300,height:200,}}></img>
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
           <img src={hallimage} style={{width:300,height:200,}}></img>
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
           <img src={hallimage3} style={{width:300,height:200,}}></img>
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
export default Detailpage;
