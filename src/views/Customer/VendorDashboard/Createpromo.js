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
import TheHeader from '../../../containers/HeaderVendor';

import withAuth from '../../withAuth';
import Axios from 'axios';

class Createpromo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            code: '',
            discount: '',
            date: '',
            data:[],
        }
        this.auth = new AuthService();

        this.submit = this.submit.bind(this);


    }
    submit(e) {

        e.preventDefault();
        const useris = localStorage.getItem('uid');

        const data = {
            code: this.state.code,
            discount: this.state.discount,
            expirydate: this.state.date,
            vendor: useris,
        };

        Axios.post('/api/vendor/create/promo', data)
            .then(res => {
                alert("Promo Created Successfully")
            })
            .catch(err => {
                alert("Promo Created Failed");

            })

    }
    componentDidMount (){
        const useris=localStorage.getItem('uid');
        Axios.get(`/api/vendor/getall/promo/${useris}`)
        .then(res => {
         this.setState({data:res.data.promoList})
         console.log(this.state.data)
        })
        
        .catch(err => {
            alert("Promo get Failed");
            
        })
    }
    render() {
        return (

            <div>
                <div>
                    <TheHeader />
                </div>


                <h1>Under Developed</h1>
                <div style={{marginTop:'2%',textAlign:'center',width:'100%'}}>
               <h1 style={{backgroundColor:'seagreen',color:'black',height:60}}>My Promo's</h1>
               </div>
               {this.state.data.map((x,index) =>
               <CRow style={{width:'80%',marginLeft:'22%',marginTop:'5%'}}>
                  <CCol xs="12" sm="6" md="8">
                  <CCard>
                      <CCardBody>
                        <CRow>
                        <CCol md="5">
                            <h1 style={{color:'green'}}>Promo {index + 1}</h1>
                        </CCol>
                          <CCol md="7">
                          <h5> Code : {x.code}</h5>
                            <p style={{color:'blue'}}> Discount : {x.discount}</p>
                            <p style={{color:'red'}}> Expiry date:  {x.expirydate.substr(0,10)}</p>
                         
                          </CCol>
                        </CRow>
                      </CCardBody>
                      <CCardFooter >
                    
                      </CCardFooter>
                    </CCard>
                </CCol>
                </CRow>
                  )}
                <CCard style={{ width: '60%', marginLeft: '20%', marginTop: '4%' }}>
                    <CCardHeader style={{ textAlign: 'center', backgroundColor: '#96e096' }}>
                        <h1>Create Promo</h1>
                    </CCardHeader>
                    <CCardBody>
                        <CRow>
                            <CCol sm="12">
                                <CForm action="" method="post">
                                    <CFormGroup>
                                        <CLabel htmlFor="nf-event">Promo Code</CLabel>
                                        <CInput
                                            type="text"
                                            id="nf-event"
                                            name="nf-event"
                                            placeholder="Enter code here.."
                                            autoComplete="event"
                                            onChange={(event) => this.setState({ code: event.target.value })}
                                        />
                                    </CFormGroup>
                                    <CFormGroup>
                                        <CLabel htmlFor="nf-event">Discount</CLabel>
                                        <CInput
                                            type="text"
                                            id="nf-event"
                                            name="nf-event"
                                            placeholder="%"
                                            autoComplete="event"
                                            onChange={(event) => this.setState({ discount: event.target.value })}
                                        />
                                    </CFormGroup>


                                    <CFormGroup>
                                        <CLabel htmlFor="nf-eventDate">Date</CLabel>
                                        <CInput
                                            type="date"
                                            id="nf-eventDate"
                                            name="nf-eventDate"
                                            style={{ width: '50%' }}
                                            onChange={(event) => this.setState({ date: event.target.value })}
                                        />
                                    </CFormGroup>

                                </CForm>
                            </CCol>
                        </CRow>
                    </CCardBody>
                    <CCardFooter>
                        <CButton color="primary" onClick={this.submit}>Create Promo</CButton>
                    </CCardFooter>
                </CCard>
            </div>
        );
    }
}

export default withAuth(Createpromo);
