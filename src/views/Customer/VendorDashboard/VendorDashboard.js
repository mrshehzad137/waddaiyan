import React, { Component } from 'react';
import AuthService from '../../AuthTest';
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
import withAuth from '../../withAuth';
import logouser from '../../../assets/img/profile.png'
import CIcon from '@coreui/icons-react';
import TheHeader from '../../../containers/HeaderVendor';
import Axios from 'axios'
class VendorDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staticdata: [],
        }
        this.auth = new AuthService();
        this.submit= this.submit.bind(this);
        this.submit1= this.submit1.bind(this);
 


    }
    componentDidMount() {

        const useris = localStorage.getItem('uid');
        Axios.get(`/api/user/getall/bookingVendor/${useris}`)
            .then(res => {
                this.setState({ staticdata: res.data.bookingList })
            })

            .catch(err => {
                alert("Venue get Failed");

            })
    }

    submit(id){            
                const data = {
                    bookingid: id,    
                     status: "Accepted"
                };
    
                Axios.post('/api/user//booking/accept-reject',data)
                .then(res => {
                   alert("Status Created Successfully")
                })
                .catch(err => {
                    alert("Status Created Failed");
                    
                })
    
    }
    submit1(id){            
        const data = {
            bookingid: id,
             status: "Rejected"
        };

        Axios.post('/api/user//booking/accept-reject',data)
        .then(res => {
           alert("Status Created Successfully")
        })
        .catch(err => {
            alert("Status Created Failed");
            
        })

}
    render() {
        return (
            <body  >
                <div>
                    <TheHeader />

                    <CRow>
                        <div>
                            <h1 style={{ color: 'black', textAlign: 'center', }}>All Bookings</h1></div>
                        {this.state.staticdata.map(x =>
                            <CCol xs="12" sm="12" md="12">
                                <CCard style={{ marginTop: 50, minHeight: 250, width: '80%', marginLeft: '10%' }}>
                                    <CCardBody >
                                        <div>
                                            <div style={{ display: 'flex' }}>
                                                <img src={logouser} style={{ width: 60, height: 60 }}></img>

                                                <h4 style={{ fontSize: 14, marginTop: 20, marginLeft: 20 }} >{x.user[0].name}</h4>
                                                <h4 style={{ fontSize: 14, marginTop: 20, marginLeft: 200 }}> Email:   {x.user[0].email}</h4>
                                            </div>
                                            <div style={{ display: 'flex' }}>
                                                <h4 style={{ fontSize: 14, marginTop: 20, marginLeft: 80 }} >Event Category:  {x.event.eventCategory}</h4>
                                                <h4 style={{ fontSize: 14, marginTop: 20, marginLeft: 151 }}> Event Location:   {x.event.location}</h4>

                                            </div>
                                            <h4 style={{ fontSize: 14, marginTop: 20, marginLeft: 80, lineHeight: 0 }}> Descrption:     {x.event.description}</h4>
                                            <div style={{ display: 'flex' }}>
                                                <h4 style={{ fontSize: 14, marginTop: 20, marginLeft: 80, width: 200 }} >Venue:  {x.event.name}</h4>
                                                <h4 style={{ fontSize: 14, marginTop: 20, marginLeft: 110, width: 200 }}>Status:   {x.status}</h4>

                                            </div>
                                            {x.status === "Created" ?
                                                <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: 50 }}>

                                                    <CButton onClick={() =>this.submit(x._id)} color="success" style={{ width: 200, height: 35, marginRight: 20 }} >Approve</CButton>
                                                    <CButton onClick={() =>this.submit1(x._id)} color="danger" style={{ width: 200, height: 35 }} >Reject</CButton>
                                                </div>
                                                : x.status === "Rejected" ?

                                                    <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: 50 }}>

                                                        <CButton onClick={() =>this.submit(x._id)} color="success" style={{ width: 200, height: 35, marginRight: 20 }} >Approve</CButton>

                                                    </div>
                                                    : x.status === "Accepted" ?
                                                        <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: 50 }}>
                                                            <CButton onClick={() =>this.submit1(x._id)} color="danger" style={{ width: 200, height: 35 }} >Reject</CButton>
                                                        </div>
                                                        : null}
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

export default withAuth(VendorDashboard);


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
