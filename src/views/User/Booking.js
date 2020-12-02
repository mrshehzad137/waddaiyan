import React, { Component } from 'react';
import AuthService from '../AuthTest';
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
import withAuth from '../withAuth';
import logouser from '../../assets/img/profile.png'
import CIcon from '@coreui/icons-react';
import TheHeader from '../../containers/TheHeader';
import Axios from 'axios'

class Booking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staticdata: [],
        }
        this.auth = new AuthService();


    }
    componentDidMount() {

        const useris=localStorage.getItem('uid');
        Axios.get(`/api/user/getall/booking/${useris}`)
            .then(res => {
                this.setState({ staticdata: res.data.bookingList})
                console.log(res.data.bookingList);
            })

            .catch(err => {
                alert("Venue get Failed");

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
                                                <h4 style={{fontSize:14,marginTop:20,marginLeft:80,width:300}} >Event Category:  {x.event.eventCategory}</h4>
                                                <h4 style={{fontSize:14,marginTop:20,}}> Event Location:   {x.event.location}</h4>
                                               
                                            </div>
                                            <div style={{ display: 'flex' }}>
                                            <h4 style={{fontSize:14,marginTop:20,marginLeft:80,lineHeight:0,width:300}}> Descrption:     {x.event.description}</h4>
                                            <h4 style={{fontSize:14,marginTop:20,}}> Discount:   {x.promocode?.discount} </h4>

                                            </div>
                                            <div style={{ display: 'flex'  }}>
                                                <h4 style={{fontSize:14,marginTop:20,marginLeft:80,width:300}} >Venue:  {x.event.name}</h4>
                                                <h4 style={{fontSize:14,marginTop:20,}}>Status:   {x.status}</h4>
                                               
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

export default withAuth(Booking);


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
