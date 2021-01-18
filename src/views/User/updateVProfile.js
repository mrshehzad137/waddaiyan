import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../AuthTest';
import {
  CCard,
  CCardBody,
  CCol,
  CCardFooter,
  CRow,
  CFormGroup,
  CLabel,
  CInput,
  CButton
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import TheHeader from '../../containers/TheHeader';
import withAuth from '../withAuth';
import axios from 'axios'

class UpdateVProfile extends Component {
  
    constructor(props){
        super(props)
        this.state = {
          user:{},
          file: null,
          fileURL:null,
          password:'',
          email:'',
          name:'',
        }
        this.handleImageChange = this.handleImageChange.bind(this);
        this.onChange=this.onChange.bind(this);
        this.onUpdate=this.onUpdate.bind(this);
        
      }
    
      handleImageChange(event) {
        this.setState({
          fileURL: URL.createObjectURL(event.target.files[0]),
          file:event.target.files[0]
        })
      }
    
      onChange(e){
        
          if(e.target.value){
            this.setState({[e.target.name]: e.target.value});
          }else{
            this.setState({[e.target.name]: ' '});
          }
          
      }
    
      onUpdate(e){
    
          let formData= new FormData();
          const useris=localStorage.getItem('uid');
        
          formData.append('name',this.state.name);
          formData.append('email',this.state.email);
          formData.append('password',this.state.password);
          formData.append('profilePicture',this.state.file);
          formData.append('id',useris);
    
          axios({
            url:'/api/vendor/update',
            method:'PUT',
            headers:{
              'Content-Type': 'multipart/form-data'
            },
            data:formData
          })
          .then(response => {
              console.log(response.data);
              alert(response.data.message);
             
             
            })
            .catch(error => {
              console.log(error);
              alert(error);
    
          })
    
      }
    
      componentWillMount(){
        const useris=localStorage.getItem('uid');
        axios.get('/api/vendor/get/'+useris)
        .then(res=>{
          console.log(res);
          this.setState({
            user:res.data.vendor,
            password:'',
            email:res.data.vendor.email,
            name:res.data.vendor.name,
          })
        })
        .catch(err=>{
          console.log(err);
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
               <div style={{backgroundColor:'#94A2B7',width:'50%',marginLeft:'25%',marginTop:'2%'}}>
                <h1 style={{textAlign:'center',color:'#000015'}}>Update Profile</h1>
                <CCard>
                      <CCardBody>
                <form style={{textAlign:'center',marginTop:'3%'}}>
                    <br></br>
                    <br></br>
                    <img src={(this.state.fileURL)?this.state.fileURL:"https://waddaiyan-backend.herokuapp.com/"+(this.state.user.profileUrl?this.state.user.profileUrl:'')} width="180" height="200" style={{border:'1px solid red',borderRadius:'50%',textAlign:'center'}} alt="Please Select Profile Picture "/>
                    <br></br>
                    <br></br>
                    <input type="file" onChange={this.handleImageChange}></input>
                    <br></br>
                    <br></br>
                    <CRow style={{textAlign:'left',width:'100%',marginLeft:'25%',marginTop:'5%'}}>
                        <CFormGroup>
                            <CLabel htmlFor="nf-event">User  Name:</CLabel>
                            <CInput
                            type="text"
                            id="nf-event"
                            name="nf-event"
                            placeholder="Enter user name.."
                            autoComplete="event"
                            value={this.state.name}
                            onChange={(event) => this.setState({name:event.target.value})}
                            />
                        </CFormGroup>
                    </CRow>
                    <CRow style={{textAlign:'left',width:'100%',marginLeft:'25%'}}>
                        <CFormGroup>
                            <CLabel htmlFor="nf-event">email:</CLabel>
                            <CInput
                            type="text"
                            id="nf-event"
                            name="nf-event"
                            placeholder="Enter user email.."
                            autoComplete="event"
                            value={this.state.email}
                            onChange={(event) => this.setState({email:event.target.value})}
                            />
                        </CFormGroup>
                    </CRow>
                    <CRow style={{textAlign:'left',width:'100%',marginLeft:'25%'}}>
                        <CFormGroup>
                            <CLabel htmlFor="nf-event">Password:</CLabel>
                            <CInput
                            type="password"
                            id="nf-event"
                            name="nf-event"
                            placeholder="Enter password .."
                            autoComplete="event"
                            value={this.state.password}
                            onChange={(event) => this.setState({password:event.target.value})}
                            />
                        </CFormGroup>
                    </CRow>
                    {/* <CRow style={{textAlign:'left',width:'100%',marginLeft:'25%'}}>
                        <CFormGroup>
                            <CLabel htmlFor="nf-event">Confirm Password:</CLabel>
                            <CInput
                            type="password"
                            id="nf-event"
                            name="nf-event"
                            placeholder="Enter user email.."
                            autoComplete="event"
                            />
                        </CFormGroup>
                    </CRow> */}
                </form>
                </CCardBody>
                <CCardFooter><CButton color="secondary" onClick={this.onUpdate} style={{float:'right'}}>Update Profile</CButton></CCardFooter>
                </CCard>
               </div>
               
                
            </div>
    );
  }
}

export default withAuth(UpdateVProfile);
