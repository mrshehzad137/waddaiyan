import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../../AuthTest';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader
} from '@coreui/react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import withAuth from '../../withAuth';
import TheHeader from '../../../containers/TheHeader';
import Axios from 'axios'
class booking extends Component {
  constructor(props){
    super(props);
    this.state={
        data:[],
        ide:'',
        eid:'',
    }
    this.auth = new AuthService(); 
    this.submit= this.submit.bind(this);
    }
    handleTitle = (event, newValue, i) => {

        // if (products.length <= i) {
        //   for (let index = products.length; index <= i; index++) {
        //     products.push({ product_id: ""});
        //   }
        // }
        console.log(newValue, "newValue")
        this.setState({eid:newValue._id})
    //    this.state.eid = newValue._id;
       console.log(newValue._id,"hdndjdbh")
        // setProducts(products)
      }
    componentDidMount (){
        console.log("props.match.params.id", this.props.history.location.pathname.substring(14))
        const useris=localStorage.getItem('uid');
        Axios.get(`/api/user/getall/event/${useris}`)
        .then(res => {
         this.setState({data:res.data.eventList})
         console.log(this.state.data)
        })
        
        .catch(err => {
            alert("Venue get Failed");
            
        })
    }
    submit(e){

        e.preventDefault();
                const useris=localStorage.getItem('uid');

                console.log("sdfsddgsdgsg",this.state.eid);

                const data = {
                    eid:this.state.eid,
                    venue:this.props.history.location.pathname.substring(14),
                    user:useris
                };
    
                Axios.post('/api/user/add/vendor',data)
                .then(res => {
                   alert("Booking Created Successfully")
                })
                .catch(err => {
                    alert("Booking Created Failed");
                    
                })
    
    }
  render() {
    return (

        <body className="app" >
               <TheHeader/>
          <div style={{marginTop:180 ,marginLeft:35,marginRight:35}}>  
         
          <CCard style={{width:'60%',marginLeft:'20%',marginTop:'4%'}}>
                <CCardHeader style={{textAlign:'center',backgroundColor:'#96e096'}}>
                  <h1>Booking</h1>
                </CCardHeader>
                <CCardBody row>
                    <div style={{ display: 'flex' }}>
                    <Autocomplete
                      id="combo-box-demo"
                      options={this.state.data}
                    //   value={title[i]}
                      getOptionLabel={(option) => option.name 
                     
                      }
                     onChange={(event, newValue) => this.handleTitle(event, newValue,)}
                      style={{ width: '750px' }}
                      renderInput={(params) => <TextField {...params} label="Select Event"
                        variant="outlined" style={{ marginTop: '0px' }} />}
                    />
                    </div>
                    <CButton onClick ={this.submit} color="success" style={{ width: 150, height: 35 ,marginTop:30,float:'right'}} >Confirm</CButton>
                   </CCardBody>
                   </CCard>

                    
          </div>
      </body>
    );
  }
}

export default withAuth(booking);
