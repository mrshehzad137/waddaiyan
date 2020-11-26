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
import logouser from '../../assets/img/profile.png'
import CIcon from '@coreui/icons-react';
import HeaderAdmin from './header';
import Axios from 'axios';
// const data = [
//     { name: "Hammad Mustafa", date: "12/3/2020", Email: "hammadmustafa39@gmail.com", event: "Wedding",eventlocation: "Lahore,Wapda Town" ,description: "It is my wedding",timeanddate: "2020-12-10T19:00:00.000Z",venuename: "Le Grand Palace",venuedescription: "It is very beautiful",},
//     { name: "Shahzad Kareem", date: "9/3/2020", Email: "Shahzadkareem22@gmail.com", event: "Birthday" ,eventlocation: "Lahore,Wapda Town",description: "It is my wedding",timeanddate: "2020-12-10T19:00:00.000Z",venuename: "Le Grand Palace",venuedescription: "It is very beautiful",}
// ]
class Booking extends Component {

    constructor(props){
        super(props);
        this.state={
            name:'',
            description:'',
            location:'',
            data:[]
        }
        }
    

        componentDidMount (){
            Axios.get(`/api/user/getall/bookings`)
            .then(res => {
            
            console.log(res.data.bookingList);
            // alert("dssfdsfdsf")
             this.setState({data:res.data.bookingList})
             console.log(this.state.data);
            })
            
            .catch(err => {
                console.log(err);
                alert("Venue get Failed");
                
            })
        }

    render() {
        console.log(this.state.data)
        return (
            <body  >
                <div>
                    <HeaderAdmin />
                    
                    <CRow>
                    <div style={{marginTop:'5%',textAlign:'center',width:'90%'}}>
                        <h1>All Booking</h1>
                    </div>
                    <div>
                    </div>
                        {this.state.data.map(x =>
                            <CCol xs="12" sm="12" md="12">
                                <CCard style={{ marginTop: 50, minHeight: 250, width: '80%', marginLeft: '10%' }}>
                                    <CCardBody >
                                        <div>
                                        <div style={{ display: 'flex'}}>
                                            <img src={logouser} style={{width:60, height:60}}></img>
                                            
                                                <h4 style={{fontSize:14,marginTop:20,marginLeft:20,color:'Red'}} >{x.user[0].name}</h4>
                                                <h4 style={{fontSize:14,marginTop:20,marginLeft:200}}> <span style={{color:'Blue'}}>Email:</span>   {x.user[0].email}</h4>
                                                <h4 style={{fontSize:14,marginTop:20,marginLeft:180}}> <span style={{color:'Blue'}}>Date: </span>    {(x.timeanddate)?x.timeanddate.substring(0, 10):''}</h4>
                                            </div>
                                            <div style={{ display: 'flex' }}>
                                                <h4 style={{fontSize:14,marginTop:20,marginLeft:80}} ><span style={{color:'Blue'}}>Event Category:</span>  {x.event.eventCategory}</h4>
                                                <h4 style={{fontSize:14,marginTop:20,marginLeft:151}}> <span style={{color:'Blue'}}>Event Location:</span>   {x.location}</h4>
                                               
                                            </div>
                                            <h4 style={{fontSize:14,marginTop:20,marginLeft:80,lineHeight:0}}><span style={{color:'Blue'}}> Descrption:</span>      {x.event.description}</h4>
                                            <div style={{ display: 'flex' }}>
                                                <h4 style={{fontSize:14,marginTop:20,marginLeft:80,width:200}} ><span style={{color:'Blue'}}>Venue:</span>  {(x.venue && x.venue.name)?x.venue.name:''}</h4>
                                               
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

export default Booking;
