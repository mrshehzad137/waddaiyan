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
 import welcome from '../../assets/img/welcome.png';
import CIcon from '@coreui/icons-react';

import HeaderAdmin from './header';
const data = [
    { name: "Hammad Mustafa", date: "12/3/2020", Email: "hammadmustafa39@gmail.com", event: "Wedding",eventlocation: "Lahore,Wapda Town" ,description: "It is my wedding",timeanddate: "2020-12-10T19:00:00.000Z",venuename: "Le Grand Palace",venuedescription: "It is very beautiful",},
    { name: "Shahzad Kareem", date: "9/3/2020", Email: "Shahzadkareem22@gmail.com", event: "Birthday" ,eventlocation: "Lahore,Wapda Town",description: "It is my wedding",timeanddate: "2020-12-10T19:00:00.000Z",venuename: "Le Grand Palace",venuedescription: "It is very beautiful",}
]
class AdminDashboard extends Component {
    render() {
        return (
            <body  >
                <div>
                    <HeaderAdmin />
                   
                    <img src={welcome} width="100%" height="80%"></img>
                </div>

            </body>
        );
    }
}

export default AdminDashboard;
