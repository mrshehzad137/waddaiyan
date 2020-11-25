import React, { Component } from 'react';

import { BiChevronsDown } from "react-icons/bi";
import {
    CInput,
    CInputGroup,
    CInputGroupPrepend,
    CInputGroupText,
    CCard,
    CCardBody,
    CCardFooter,
    CCol,
    CRow,
    CLink,
    CButton
} from '@coreui/react'
// import withAuth from '../../withAuth';
// import logouser from '../../../assets/img/profile.png'
import CIcon from '@coreui/icons-react';
import TheHeader from '../../containers/HeaderVendor';
const data = [
    { name: "Hammad Mustafa", date: "12/3/2020", Email: "hammadmustafa39@gmail.com", event: "Wedding",eventlocation: "Lahore,Wapda Town" ,description: "It is my wedding",timeanddate: "2020-12-10T19:00:00.000Z",venuename: "Le Grand Palace",venuedescription: "It is very beautiful",},
    { name: "Shahzad Kareem", date: "9/3/2020", Email: "Shahzadkareem22@gmail.com", event: "Birthday" ,eventlocation: "Lahore,Wapda Town",description: "It is my wedding",timeanddate: "2020-12-10T19:00:00.000Z",venuename: "Le Grand Palace",venuedescription: "It is very beautiful",}
]
class AdminDashboard extends Component {
    render() {
        return (
            <body  >
                <div>
                    <TheHeader />
                   
                    <CRow>
                    <div>
                        <h1 style={{ color: 'black', textAlign: 'center', }}>All Bookings</h1></div>
                        {data.map(x =>
                            <CCol xs="12" sm="12" md="12">
                                <CCard style={{ marginTop: 50, minHeight: 250, width: '80%', marginLeft: '10%' }}>
                                    <CCardBody >
                                        <div>
                                        <div style={{ display: 'flex'}}>
                                            {/* <img src="" style={{width:60, height:60}}></img> */}
                                            
                                                <h4 style={{fontSize:14,marginTop:20,marginLeft:20}} >{x.name}</h4>
                                                <h4 style={{fontSize:14,marginTop:20,marginLeft:200}}> Email:   {x.Email}</h4>
                                                <h4 style={{fontSize:14,marginTop:20,marginLeft:180}}> Date:     {x.date}</h4>
                                            </div>
                                            <div style={{ display: 'flex' }}>
                                                <h4 style={{fontSize:14,marginTop:20,marginLeft:80}} >Event Category:  {x.event}</h4>
                                                <h4 style={{fontSize:14,marginTop:20,marginLeft:151}}> Event Location:   {x.eventlocation}</h4>
                                               
                                            </div>
                                            <h4 style={{fontSize:14,marginTop:20,marginLeft:80,lineHeight:0}}> Descrption:     {x.description}</h4>
                                            <div style={{ display: 'flex' }}>
                                                <h4 style={{fontSize:14,marginTop:20,marginLeft:80,width:200}} >Venue:  {x.venuename}</h4>
                                                <h4 style={{fontSize:14,marginTop:20,marginLeft:110,width:200}}>Venu Detail:   {x.venuedescription}</h4>
                                                <h4 style={{fontSize:14,marginTop:20,marginLeft:180,width:250}}> Time & Date:     {x.timeanddate}</h4>
                                               
                                            </div>
                                            <div style={{ display: 'flex' ,justifyContent:'center',textAlign:'center',marginTop:50}}>
                                            <CButton color="success" style={{ width: 200, height: 35,marginRight:20 }} >Approve</CButton>
                                            <CButton color="danger" style={{ width: 200, height: 35 }} >Reject</CButton>
                                            </div>

                                        
                                        </div>

                                    </CCardBody>
                                    <CCardFooter style={{ padding: 0 }}>

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

// SSRSHome.propTypes = propTypes;
// SSRSHome.defaultProps = defaultProps;

export default AdminDashboard;


{/* <div className="row">
              <div className="col-md-5">
                <img src={image1} width="100%" height="845px" alt="Responsive image"/>
              </div>
              <div className="col-md-7">
              <div style={{marginLeft:"2%"}}>
                <h4>Smart Synopsis Review System</h4>
                <p>
                        Description Here..
                </p>
               </div>
              </div>
          </div> */}
