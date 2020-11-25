import React, { Component } from 'react';
import image1 from '../assets/img/back1.jpg';
import {BiChevronsDown} from "react-icons/bi";
import withAuth from '../views/withAuth';
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
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import TheHeader from './TheHeader';
import Axios from 'axios'
const datapicturevendor = [
  "https://media.istockphoto.com/photos/portrait-of-smiling-handsome-man-in-blue-tshirt-standing-with-crossed-picture-id1045886560?k=6&m=1045886560&s=612x612&w=0&h=hXrxai1QKrfdqWdORI4TZ-M0ceCVakt4o6532vHaS3I=", "https://sa1s3optim.patientpop.com/assets/images/provider/photos/1888657.jpg", "data:image/jpeg;base64,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", "https://media.istockphoto.com/photos/mature-handsome-business-man-picture-id1040308104?k=6&m=1040308104&s=612x612&w=0&h=l_bUE9cP9Hj1UmxPq4i-gMXkDF1GzfO7Eel7iB4Kc74=", "https://media.istockphoto.com/photos/mature-mixed-race-business-man-picture-id1059661424?k=6&m=1059661424&s=612x612&w=0&h=Wkp3Rs2F_90PtZu07-fR1YmzGjsw5qj73D42doCo1Gc=", "https://www.kaprayonline.com/media/wysiwyg/category-pages/4.-Men_s-Tees-_-Polos_1.jpg", "https://static.toiimg.com/photo/msid-72332644/72332644.jpg?resizemode=4&width=400",
  "https://img.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5378.jpg?size=626&ext=jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR388MlJs5H62wMafeees_aq3dn08Mb5U-HdA&usqp=CAU", "https://img5.goodfon.com/wallpaper/nbig/0/3e/alex-fetter-devushka-litso-dlinnye-volosy-ulybka-vzgliad-vet.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRywkfaYErcITk0pooogrG75tvWqNC8knsQ_g&usqp=CAU", "https://ath2.unileverservices.com/wp-content/uploads/sites/8/2018/01/Hairstyles-for-men-pompadour.jpg"
]
const datapicture=[
  "https://image.shutterstock.com/image-photo/wedding-venue-260nw-604904363.jpg","https://i.insider.com/5e67f940235c1804fd14aba9?width=1100&format=jpeg&auto=webp","https://blog.e360.pk/wp-content/uploads/2020/03/Wedding-Venues-and-Vehicles-for-a-Memorable-Event.jpg","https://www.thestatesman.com/wp-content/uploads/2019/07/Wedding-Venue.jpg","https://blog.bridals.pk/wp-content/uploads/2019/02/Banner-2.jpg",
  "https://www.brides.com/thmb/0sOaZ3sx3JI5fdvHe3Gej0x813o=/3759x2114/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__brides__proteus__585acc1e54421cf15eb0e0b8__169-6741927d00934d1d942b4e2e8c2ab990.jpeg","https://gmgweddingservices.com/wp-content/uploads/2020/05/Wedding-Venue.jpg","https://blog.bridals.pk/wp-content/uploads/2018/10/reception-decor-hacks-banner.jpg","https://weddingpakistani.com/wp-content/uploads/2012/02/20-Best-Wedding-Venues-in-Pakistan.jpg","https://blog.radissonblu.com/wp-content/uploads/2019/07/Radisson-Blu-Hotell-Kuwait-wedding-veunue-on-boat-Al-Hashemi-II.jpg","https://cdn.diys.com/wp-content/uploads/2018/05/franscican-garden-wedding-venue.jpg","https://blog.bridals.pk/wp-content/uploads/2018/11/sems-2.jpg","https://i.pinimg.com/originals/9c/01/f5/9c01f50987a59c007d04c0a768fd6ebd.jpg",
]
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data1: []
    }
  }

  componentDidMount() {
    Axios.get('/api/vendor/getall/vendors')
      .then(res => {
        this.setState({ data: res.data.vendorList })
        console.log(this.state.data)
      })

      .catch(err => {
        alert("Venue get Failed");

      })
  }


  componentDidMount (){
    Axios.get('/api/vendor/getall/venue')
    .then(res => {
     this.setState({data1:res.data.venueList})
     console.log(this.state.data)
    })
    
    .catch(err => {
        alert("Venue get Failed");
        
    })
}
  render() {
    return (
        <body className="app" >
          <div>  
            <TheHeader/>
            <div className="app-body" >
            <main className="main" style={{height:'960px'}}>
                <div  style={{backgroundImage: `url(${image1})`,height:"490px",width:'100%'}}>
                  <div style={{height:"490px",backgroundColor:"#12202f",opacity:"0.6"}}>
                  <div className="row" style={{marginLeft:"35%"}}> 
                    <h1 style={{color:"white",marginTop:"16%",marginBottom:"3%"}}>Plan Your Wedding with Waddaiyan</h1>
                    <h3></h3>
                  </div>
                  <div className="row" style={{marginLeft:"45%"}}>
                    <div>
                    <div >
                      {/* <CInputGroup>
                        <CInputGroupPrepend>
                          <CInputGroupText className={'bg-info text-white'}>
    
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="email" id="username" name="username" autoComplete="name"/>
                      </CInputGroup> */}
                    </div>
                    </div>
                  </div>
              </div>
              </div>
              <div style={{backgroundColor:'#94A2B7',width:"80%", marginLeft:'10%', marginTop:'5%',padding:'10px 0px'}}>
                <h2 style={{color:'#000015',margin:'3%'}}>Popular Venu Searches:</h2>
                
                <CRow style={{width:'90%',marginLeft:'5%'}}>
                  <CCol xs="12" sm="6" md="4">
                  <CCard>
                      <CCardBody>
                        <CRow>
                          <CCol><img src="https://image.wedmegood.com/resized/300X/uploads/option_image/62/4-star-above-hotels.png" width="100%" height="70%"/></CCol>
                          <CCol><h5>Grand Place Evenue</h5><p>Aibak Block, Sher Shah Road، New Garden Town،, Lahore, Punjab 54600</p></CCol>
                        </CRow>
                      </CCardBody>
                      <CCardFooter ><a href="/user/venue" style={{float:'right'}}>View</a></CCardFooter>
                    </CCard>
                  </CCol>
                  <CCol xs="12" sm="6" md="4">
                    <CCard>
                      <CCardBody>
                        <CRow>
                          <CCol><img src="https://image.wedmegood.com/resized/400X/uploads/vendor_cover_pic/6209/ad8f07c4-f42f-4e1e-ab86-e86a7545b711.png" width="100%" height="70%"/></CCol>
                          <CCol><h5>Johar Event Complex</h5><p>20 Maulana Shaukat Ali Road, Johar Town, Lahore, Punjab</p></CCol>
                        </CRow>
                      </CCardBody>
                      <CCardFooter><a href="#" style={{float:'right'}}>View</a></CCardFooter>
                    </CCard>
                  </CCol>
                  <CCol xs="12" sm="6" md="4">
                    <CCard>
                      <CCardBody>
                        <CRow>
                          <CCol><img src="https://image.wedmegood.com/resized/400X/uploads/vendor_cover_pic/60784/4e7832d7-6183-4561-91b3-9a73e985ee02.png"width="100%" height="70%"/></CCol>
                          <CCol><h5>LeGrand Evenue</h5><p>14, A-1 Peco Rd, Township Sector A 1 Lahore, Punjab 54600</p></CCol>
                        </CRow>
                      </CCardBody>
                      <CCardFooter><a href="#" style={{float:'right'}}>View</a></CCardFooter>
                    </CCard>
                  </CCol>
                </CRow>
                <CRow style={{textAlign:'center',width:'90%',marginLeft:'5%'}}><CLink to="/user/venue"><button style={{marginLeft:'80%',width:'100px',height:'40px'}}><BiChevronsDown/></button></CLink></CRow>
                <h2 style={{margin:'3%',color:'#000015'}}>Popular Vendors:</h2>
                <CRow style={{width:'90%',marginLeft:'5%'}}>
                  <CCol xs="12" sm="6" md="4">
                  <CCard>
                      <CCardBody>
                        <CRow>
                          <CCol xs="12" sm="6" md="6"><img src="https://i.pinimg.com/474x/68/23/e5/6823e54b41e1649427d8e6f4cab03bbf.jpg" width="120%" height="70%" style={{border:'1px solid red',borderRadius:'50%'}}/></CCol>
                          <CCol xs="12" sm="6" md="6"><h5>Hassan Bilal</h5><p>Aibak Block، New Garden Town،, Lahore, Punjab 54600</p></CCol>
                        </CRow>
                      </CCardBody>
                      <CCardFooter ><a href="#" style={{float:'right'}}>View</a></CCardFooter>
                    </CCard>
                  </CCol>
                  <CCol xs="12" sm="6" md="4">
                    <CCard >
                      <CCardBody >
                        <CRow >
                          <CCol><img src="https://i.pinimg.com/originals/7c/62/25/7c6225affa0cf0823a3568485c646967.jpg" width="120%" height="70%" style={{border:'1px solid red',borderRadius:'50%'}}/></CCol>
                          <CCol><h5>Saqib bilal</h5><p>Aibak Block, Sher Shah Road, Lahore, Punjab 54600</p></CCol>
                        </CRow>
                      </CCardBody>
                      {/* <CCardFooter><a href="#user/vendor" style={{float:'right'}}>View</a></CCardFooter> */}
                    </CCard>
                  </CCol>
                  <CCol xs="12" sm="6" md="4">
                    <CCard>
                      <CCardBody>
                        <CRow>
                          <CCol><img src="https://www.gamedesigning.org/wp-content/uploads/2020/01/Saul-Bass.jpg" width="120%" height="70%" style={{border:'1px solid red',borderRadius:'50%'}}/></CCol>
                          <CCol><h5>Amjad Malik</h5><p>Aibak Block, Sher Shah Road، New Garden Town،, Lahore, Punjab 54600</p></CCol>
                        </CRow>
                      </CCardBody>
                      <CCardFooter><a href="#" style={{float:'right'}}>View</a></CCardFooter>
                    </CCard>
                  </CCol>
                </CRow>
                <CRow style={{textAlign:'center',width:'90%',marginLeft:'5%'}}>
                  <CLink to="/user/vendor"><button  style={{marginLeft:'40%',width:'100px',height:'40px'}}><BiChevronsDown/></button></CLink></CRow>
              </div>
            </main>
            </div>
            {/* <footer className="app-footer">
            <Footer/>
            </footer> */}
          </div>
      </body>
    );
  }
}

// SSRSHome.propTypes = propTypes;
// SSRSHome.defaultProps = defaultProps;

export default withAuth(Home);


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
