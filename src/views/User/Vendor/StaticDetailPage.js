import React, { Component } from 'react';
import {
    CRow,
    CCardFooter,
    CCardBody,
    CCard,
    CCol,
    CButton,
    CTextarea
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import TheHeader from '../../../containers/TheHeader';
import hallimage from '../../../assets/img/det.webp'
import { AiOutlineStar, AiFillPhone } from "react-icons/ai";
import img from '../../../assets/img/profile.png'
import withAuth from '../../withAuth';

const data = [
    {
        title: "John Ibrham", description: "The Mallu Farms What a beautiful venue for an engagement party! We booked The Bali for the event and it totally rocked the theme! The team was extremely supportive and made us feel comfortable. The food was mouth watering, needless to say their in-house catering was beyond perfect! The decor partners did their job really well and on time! "

    },
    {
        title: "Salman Khan", description: "The Mallu Farms What a beautiful venue for an engagement party! We booked The Bali for the event and it totally rocked the theme! The team was extremely supportive and made us feel comfortable. The food was mouth watering, needless to say their in-house catering was beyond perfect! The decor partners did their job really well and on time! "

    },
    {
        title: "Ahmed Mann", description: "The Mallu Farms What a beautiful venue for an engagement party! We booked The Bali for the event and it totally rocked the theme! The team was extremely supportive and made us feel comfortable. The food was mouth watering, needless to say their in-house catering was beyond perfect! The decor partners did their job really well and on time! "

    },
    {
        title: "Sidra Ibrahim", description: "The Mallu Farms What a beautiful venue for an engagement party! We booked The Bali for the event and it totally rocked the theme! The team was extremely supportive and made us feel comfortable. The food was mouth watering, needless to say their in-house catering was beyond perfect! The decor partners did their job really well and on time! "

    },

]
class StaticDetailPage extends Component {
    render() {
        return (
            <body className="app" >
                <TheHeader />
                <div style={{ marginTop: 180, marginLeft: 35, marginRight: 35 }}>
                    <div style={{ justifyContent: 'center', textAlign: 'center' }}>
                        <CRow>
                            <CCol xs="12" sm="12" md="12">
                                <img src={hallimage}></img>


                            </CCol>
                            <CCol xs="12" sm="12" md="12">
                                <CCard style={{ border: 'black', width: '70%', marginLeft: '15%', marginTop: '-45px' }}>
                                    <CCardBody>
                                        <div style={{ justifyContent: 'space-between', display: 'flex', paddingTop: 10 }}>
                                            <p style={{ fontWeight: 'bold', float: 'left', fontSize: 22 }}>Johar Complex</p>
                                            <p style={{ fontWeight: 'bold', float: 'right', backgroundColor: 'green', color: 'white', textAlign: 'center', minWidth: 80, height: 30 }}><AiOutlineStar />  4.9</p>
                                        </div>
                                        <div style={{ justifyContent: 'space-between', display: 'flex', lineHeight: 0 }}>
                                            <p style={{ fontWeight: 'bold', float: 'left', opacity: 0.5 }}>Mallu Farm, Ansal Villas, New Delhi, Delhi, India</p>
                                            <p style={{ fontWeight: 'bold', float: 'right' }}>21 Reviews</p>
                                        </div>
                                        <div style={{ justifyContent: 'space-between', display: 'flex', lineHeight: 0 }}>
                                            <p style={{ fontWeight: 'bold', float: 'left', color: 'green', paddingTop: 20, fontSize: 20 }}><AiFillPhone />Contact</p>
                                            <CButton color="success" style={{ width: 200, height: 45 }} >Book</CButton>
                                        </div>
                                    </CCardBody>
                                </CCard>

                            </CCol>

                            <div style={{ backgroundColor: 'white', width: '90%', justifyContent: 'center', marginLeft: '5%', marginRight: '5%', marginBottom: 50 }}>
                                {data.map(x =>

                                    <CCol xs="12" sm="12" md="12">
                                        <div style={{ display: 'flex', width: '100%' }}>
                                            <img src={img} style={{ width: 60, height: 60, borderRadius: 99, marginTop: 20 }}></img>
                                            <h6 style={{ fontSize: 18, marginTop: 30, paddingLeft: 10 }}>{x.title}</h6>
                                            <p style={{ fontWeight: 'bold', backgroundColor: 'green', color: 'white', minWidth: 80, height: 30, marginTop: 30, marginLeft: 50 }}><AiOutlineStar />  4.9</p>
                                        </div>
                                        <p style={{ float: 'left', paddingLeft: 30, width: '100%', marginBottom: 10, }}>{x.description}</p>


                                    </CCol>

                                )}
                            </div>
                        </CRow>
                        </div>
                        <CRow>

                            <div style={{ backgroundColor: 'white', width: '90%', marginLeft: '5%', marginRight: '5%', marginBottom: 10, minHeight: 300, display: 'flex' }}>
                                <CCol xs="12" sm="12" md="5">
                                    

                                    <h6 style={{ fontSize: 18, marginTop: 10, float: 'left', width: '100%' }}>Reviews[21]</h6>
                                
<div >
                                    <div style={{ display: 'flex', width: '100%' ,justifyContent:'space-between'}}>
                                            <p style={{ fontWeight: 'bold', float: 'left',  }}>Johar Complex</p>
                                            <p style={{ fontWeight: 'bold', float: 'right', backgroundColor: 'green', color: 'white', textAlign: 'center', minWidth: 80, height: 30 }}><AiOutlineStar />  4.9</p>
                                       
                            </div>
                            <div style={{ display: 'flex', width: '100%' ,justifyContent:'space-between'}}>
                            <p style={{ fontWeight: 'bold', float: 'left',  }}>Review Distribution</p>

                                            <p style={{ fontWeight: 'bold', float: 'right' }}>21 Reviews</p> 
             
     </div>
     
     <p style={{ fontWeight: 'bold', float: 'left',  }}>Last Review Updated on 8 Nov 2020</p>


     </div>
                                </CCol>
                                <CCol xs="12" sm="12" md="7">
                                    <p style={{ marginTop: 50, float: 'left', fontSize: 18, fontWeight: 'bold' }}>Review Mallu Farms</p>
                                    <CTextarea
                                        name="textarea-input"
                                        id="textarea-input"
                                        rows="9"
                                        placeholder="Add your review..."
                                    />

                                    <CButton color="success" style={{ width: 200, height: 45, float: 'right', marginTop: 50 }} >Submit Review</CButton>

                                </CCol>
                            </div>
                        </CRow>

                   
                </div>
            </body>
        );
    }
}
export default withAuth(StaticDetailPage);
