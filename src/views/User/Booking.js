import React, { Component } from 'react';
import AuthService from '../AuthTest';
import { BiChevronsDown } from "react-icons/bi";
import StripeCheckout from 'react-stripe-checkout';
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
import { func } from 'prop-types';

class Booking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staticdata: [],
            booking:{}
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
                alert("Bookings get Failed");

            })
    }

    paymentTest = (token) => {
        console.log(token,this.state.booking);
        Axios.post('/api/user/payment',{token,booking:this.state.booking})
        .then(res => {
            alert("Payment Successfully")
            window.location.reload(false);
        })
        .catch(err => {
            alert("Payment Faild");
            window.location.reload(false);
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
                                                <h4 style={{fontSize:14,marginTop:20,marginLeft:80,width:300}} >Venue:  {x.venue?x.venue.name:''}</h4>
                                                <h4 style={{fontSize:14,marginTop:20}} >Vendor:  {x.vendor?x.vendor.map(y=>{return y.name}):''}</h4>
                                            </div> 
                                            <div style={{ display: 'flex'  }}>
                                                <h4 style={{fontSize:14,marginTop:20,marginLeft:80,width:300}} >Date:  {x.timeanddate?x.timeanddate.substr(0,10):''}</h4>
                                                <h4 style={{fontSize:14,marginTop:20}} >Time:  {x.timeHours?x.timeHours:''}</h4>
                                            </div> 
                                            <div style={{ display: 'flex'  }}>
                                                <h4 style={{fontSize:14,marginTop:20,marginLeft:80,width:300}}>Status:   {x.status}</h4>
                                                <h4 style={{fontSize:14,marginTop:20,color:'red'}} >Charges:  {(x.vendor[0].charges + ((x.venue)?x.venue.charges:0))}</h4>
                                            </div> 
                                            <div style={{ display: 'flex'  }}>
                                                <h4 style={{fontSize:14,marginTop:20,marginLeft:80,width:300,color:'Green'}}>Payment Status:   {(x.paymentStatus)?x.paymentStatus:''}</h4>
                                            </div>
                                        </div>

                                    </CCardBody>
                                    <CCardFooter style={{ padding: 10 }}>
                                    <StripeCheckout style={{display:x.paymentStatus=="NotPaid"?'inherit':'none'}}
                                        name="Purchase Vendor For Event"
                                        token={this.paymentTest}
                                        amount={(x.vendor[0].charges + ((x.venue)?x.venue.charges:0))*100}
                                        stripeKey="pk_test_51I9VCgFlqTslhU9ys4l8nuV5eAlcvzXLeYbyKRZ77bryXegFBijCuZSmawAIXerjzU4pE6ZwUXp2YrFDtYEcyxZv00KEdYeQu0"
                                    >
                                    <CButton color="primary" style={{display:x.paymentStatus=="NotPaid"?'inherit':'none'}} onClick={()=>{this.setState({booking:x})}}>Pay <span style={{color:'red'}}>${(x.vendor[0].charges + ((x.venue)?x.venue.charges:0))}</span> Via Stripe Card</CButton>
                                    </StripeCheckout>
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
