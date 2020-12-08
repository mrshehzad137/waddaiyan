import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TimePicker from 'react-time-picker';
import AuthService from '../AuthTest';
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
import adminImage from '../../assets/img/imag1.png'
import TheHeader from '../../containers/TheHeader';
import myevent from '../../assets/img/myevent.jpg'
import withAuth from '../withAuth';
import Axios from 'axios';
const datapicture=[
  "https://image.shutterstock.com/image-photo/wedding-venue-260nw-604904363.jpg","https://i.insider.com/5e67f940235c1804fd14aba9?width=1100&format=jpeg&auto=webp","https://blog.e360.pk/wp-content/uploads/2020/03/Wedding-Venues-and-Vehicles-for-a-Memorable-Event.jpg","https://www.thestatesman.com/wp-content/uploads/2019/07/Wedding-Venue.jpg","https://blog.bridals.pk/wp-content/uploads/2019/02/Banner-2.jpg",
  "https://www.brides.com/thmb/0sOaZ3sx3JI5fdvHe3Gej0x813o=/3759x2114/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__brides__proteus__585acc1e54421cf15eb0e0b8__169-6741927d00934d1d942b4e2e8c2ab990.jpeg","https://gmgweddingservices.com/wp-content/uploads/2020/05/Wedding-Venue.jpg","https://blog.bridals.pk/wp-content/uploads/2018/10/reception-decor-hacks-banner.jpg","https://weddingpakistani.com/wp-content/uploads/2012/02/20-Best-Wedding-Venues-in-Pakistan.jpg","https://blog.radissonblu.com/wp-content/uploads/2019/07/Radisson-Blu-Hotell-Kuwait-wedding-veunue-on-boat-Al-Hashemi-II.jpg","https://cdn.diys.com/wp-content/uploads/2018/05/franscican-garden-wedding-venue.jpg","https://blog.bridals.pk/wp-content/uploads/2018/11/sems-2.jpg","https://i.pinimg.com/originals/9c/01/f5/9c01f50987a59c007d04c0a768fd6ebd.jpg",
]
class Events extends Component {
  
  constructor(props){
    super(props);
    this.state={
      name:'',
      description:'',
      location:'',
      data:[],
      eventCategory:'',
      date:'',
      time:'10:00',
    }
    this.auth = new AuthService();
      
        this.submit= this.submit.bind(this);
        this.onChange=this.onChange.bind(this);
    }

    
    onChange(e){
            
            this.setState({[e.target.name]: e.target.value});
    }
    componentDidMount (){
      const useris=localStorage.getItem('uid');
      Axios.get(`/api/user/getall/event/${useris}`)
      .then(res => {
       this.setState({data:res.data.eventList})
       console.log(this.state.data)
      })
      
      .catch(err => {
          alert("Event get Failed,Please Create one");
          
      })
  }
        
  submit(e){

    e.preventDefault();
            const useris=localStorage.getItem('uid');
        
            const data = {
              name:this.state.name,
              description:this.state.description,
              location:this.state.location,
              date:this.state.date,
              eventCategory:this.state.eventCategory,
              userid:useris,
              time:this.state.time
            };

            Axios.post('/api/user/create/event',data)
            .then(res => {
               alert("Event Created Successfully")
            })
            .catch(err => {
                alert("Event Already Exist");
                
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
               <div  style={{backgroundImage: `url(${myevent})`,height:"490px",width:'100%'}}>
                  <div style={{height:"490px",backgroundColor:"#12202f",opacity:"0.7"}}>
                  <div className="row" style={{marginLeft:"35%"}}> 
                    <h1 style={{color:"white",marginTop:"16%",marginBottom:"3%"}}>Mange Your Events</h1>
                    <h3></h3>
                  </div>
              </div>
              </div>
               </div>
               <div style={{marginTop:'2%',textAlign:'center',width:'90%'}}>
               <h1>My Events</h1>
               </div>
               {this.state.data.map(x =>
               <CRow style={{width:'80%',marginLeft:'22%',marginTop:'5%'}}>
                  <CCol xs="12" sm="6" md="8">
                  <CCard>
                      <CCardBody>
                        <CRow>
                        <CCol md="5"><img src={datapicture[Math.floor(Math.random() * 12)]} width="100%" height="100%"/></CCol>
                          <CCol md="7">
                          <h5>{x.name}</h5>
                            <p>{x.description}</p>
                            <p>{x.location}</p>
                            <p>Event Category : {x.eventCategory}</p>
                            <p>Status : {x.status}</p>
                            <p>Time Date : {(x.timeanddate)?x.timeanddate.substr(0,10):''} {x?.timeHours}</p>
                            
                          </CCol>
                        </CRow>
                      </CCardBody>
                      <CCardFooter >
                    
                      </CCardFooter>
                    </CCard>
                </CCol>
                </CRow>
                  )}
               <CCard style={{width:'60%',marginLeft:'20%',marginTop:'4%'}}>
                <CCardHeader style={{textAlign:'center',backgroundColor:'#96e096'}}>
                  <h1>Create Event</h1>
                </CCardHeader>
                <CCardBody>
                <CRow>
                  <CCol sm="12">
                    <CForm action="" method="post">
                      <CFormGroup>
                        <CLabel htmlFor="nf-event">Event Name</CLabel>
                        <CInput
                          type="text"
                          id="nf-event"
                          name="nf-event"
                          placeholder="Enter event name.."
                          autoComplete="event"
                          onChange={(event) => this.setState({name:event.target.value})}
                        />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="nf-event">Event Category</CLabel>
                        <CSelect style={{width:'50%'}}
                          onChange={(event) => this.setState({eventCategory:event.target.value})} >
                          <option >Select Category</option>
                          <option value="Wedding">Wedding</option>
                          <option value="Birthday">Birthday</option>
                          <option value="Aniversary">Aniversary</option>
                          <option value="CollegeParty">College Party</option>
                        </CSelect>
                      </CFormGroup>
                      <CFormGroup>
                      <CLabel htmlFor="nf-eventCat">Event Details</CLabel>
                      <CTextarea name="nf-eventCat" id="nf-eventCat" rows="5"
                      onChange={(event) => this.setState({description:event.target.value})}>

                      </CTextarea>
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="nf-event">Location</CLabel>
                        <CSelect style={{width:'50%'}} onChange={(event) => this.setState({location:event.target.value})}>
                          <option>Select Location</option>
                          <option value="Lahore">Lahore</option>
                          <option value="Islamabad">Islamabad</option>
                          <option value="Sheikhupura">Sheikhupura</option>
                          <option value="Faislabad">Faislabad</option>
                        </CSelect>
                      </CFormGroup>
                      <CFormGroup>
                      <CLabel htmlFor="nf-eventDate">Date</CLabel>
                        <CInput
                          type="date"
                          id="nf-eventDate"
                          name="nf-eventDate"
                          style={{width:'50%'}}
                          onChange={(event) => this.setState({date:event.target.value})}
                        />
                      </CFormGroup>
                      <CFormGroup>
                      <CLabel htmlFor="nf-eventDate">Time</CLabel>
                        <CSelect onChange={(event) => this.setState({time:event.target.value})} style={{width:'50%'}}>
                          <option value="9:00 Am">Select</option>
                          <option value="9:00 Am">9:00 Am</option>
                          <option value="10:00 Am">10:00 Am</option>
                          <option value="11:00 Am">11:00 Am</option>
                          <option value="12:00 Pm">12:00 Pm</option>
                          <option value="1:00 Pm">1:00 Pm</option>
                          <option value="2:00 Pm">2:00 Pm</option>
                          <option value="3:00 Pm">3:00 Pm</option>
                          <option value="4:00 Pm">4:00 Pm</option>
                          <option value="5:00 Pm">5:00 Pm</option>
                          <option value="6:00 Pm">6:00 Pm</option>
                          <option value="7:00 Pm">7:00 Pm</option>
                          <option value="8:00 Pm">8:00 Pm</option>
                          <option value="9:00 Pm">9:00 Pm</option>
                          <option value="10:00 Pm">10:00 Pm</option>
                          <option value="11:00 Pm">11:00 Pm</option>
                          <option value="12:00 Am">12:00 Am</option>
                        </CSelect>
                      </CFormGroup>                     
                    </CForm>
                  </CCol>
                </CRow>
                </CCardBody>
                <CCardFooter>
                <CButton color="primary" onClick={this.submit}>Create Event</CButton>
                </CCardFooter>
              </CCard>
        </div>
    );
  }
}

export default withAuth(Events);
