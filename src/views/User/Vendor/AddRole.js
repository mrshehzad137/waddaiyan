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
import CIcon from '@coreui/icons-react'
import TheHeader from '../../../containers/HeaderVendor';
// import myevent from '../../assets/img/myevent.jpg'
import withAuth from '../../withAuth';
import Axios from 'axios';

class AddRole extends Component {
  
  constructor(props){
    super(props);
    this.state={
        role:'',
        charges:'',
    }
    
    this.auth = new AuthService();
      
    this.submit= this.submit.bind(this);
    this.onChange=this.onChange.bind(this);

    }

    
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }


        
    submit(e){

        e.preventDefault();
                const useris=localStorage.getItem('uid');
            
                const data = {
                    role:this.state.role,
                    id:useris,
                    charges:Number(this.state.charges)
                };

                Axios.post('/api/vendor/add/role',data)
                .then(res => {
                   alert("Role Created Successfully")
                })
                .catch(err => {
                    alert("Role Created Failed");
                    
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
               <CCard style={{width:'60%',marginLeft:'20%',marginTop:'4%'}}>
                <CCardHeader style={{textAlign:'center',backgroundColor:'#96e096'}}>
                  <h1>Create Role</h1>
                </CCardHeader>
                <CCardBody>
                <CRow>
                  <CCol sm="12">
                    <CForm action="" method="post">
                      <CFormGroup>
                        <CLabel htmlFor="nf-event"
                        >Role</CLabel>
                        <CSelect style={{width:'50%'}}
                          onChange={(event) => this.setState({role:event.target.value})} >
                          <option >Select Role</option>
                          <option value="Event Planer">Event Planer</option>
                          <option value="Photo Grapher">Photo Grapher</option>
                          <option value="Designer">Designer</option>
                          <option value="Marriage Hall Owner">Marriage Hall Owner</option>
                        </CSelect>
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="nf-event"
                        >Service Charges</CLabel>
                        <CInput
                          type="text"
                          id="nf-event"
                          name="nf-event"
                          placeholder="Enter charges"
                          autoComplete="event"
                          style={{width:'50%'}}
                          onChange={(event) => this.setState({charges:event.target.value})}
                        />
                      </CFormGroup>
                    </CForm>
                  </CCol>
                </CRow>
                </CCardBody>
                <CCardFooter>
                <CButton color="primary" onClick={this.submit}>Create Role</CButton>
                </CCardFooter>
              </CCard>
        </div>
    );
  }
}

export default withAuth(AddRole);
