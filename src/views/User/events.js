import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../AuthTest';
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
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import adminImage from '../../assets/img/imag1.png'
import TheHeader from '../../containers/TheHeader';

class Events extends Component {
  
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

    componentWillMount(){
        if(this.auth.loggedIn())
            this.props.history.replace('/AdminDashboard');
    }
      

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

            <div>  
                <div>
                <TheHeader/>
                </div>
                
               <div>
               <h1>Under Developed</h1>
               </div>
                <h1>Under Developed</h1>
        </div>
    );
  }
}

export default Events;
