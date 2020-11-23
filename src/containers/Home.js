import React, { Component } from 'react';
import image1 from '../assets/img/back1.jpg';
import {BiChevronsDown} from "react-icons/bi";
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
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import TheHeader from './TheHeader';

class SSRSHome extends Component {
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
                      <CInputGroup>
                        <CInputGroupPrepend>
                          <CInputGroupText className={'bg-info text-white'}>
                            Search Event
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="email" id="username" name="username" autoComplete="name"/>
                      </CInputGroup>
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
                          <CCol><img src="https://image.wedmegood.com/resized/300X/uploads/option_image/62/4-star-above-hotels.png" width="180"/></CCol>
                          <CCol><h5>Grand Place Evenue</h5><p>Aibak Block, Sher Shah Road، New Garden Town،, Lahore, Punjab 54600</p></CCol>
                        </CRow>
                      </CCardBody>
                      <CCardFooter ><a href="#" style={{float:'right'}}>View</a></CCardFooter>
                    </CCard>
                  </CCol>
                  <CCol xs="12" sm="6" md="4">
                    <CCard>
                      <CCardBody>
                        <CRow>
                          <CCol><img src="https://image.wedmegood.com/resized/400X/uploads/vendor_cover_pic/6209/ad8f07c4-f42f-4e1e-ab86-e86a7545b711.png" width="180"/></CCol>
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
                          <CCol><img src="https://image.wedmegood.com/resized/400X/uploads/vendor_cover_pic/60784/4e7832d7-6183-4561-91b3-9a73e985ee02.png" width="180"/></CCol>
                          <CCol><h5>LeGrand Evenue</h5><p>14, A-1 Peco Rd, Township Sector A 1 Lahore, Punjab 54600</p></CCol>
                        </CRow>
                      </CCardBody>
                      <CCardFooter><a href="#" style={{float:'right'}}>View</a></CCardFooter>
                    </CCard>
                  </CCol>
                </CRow>
                <CRow style={{textAlign:'center',width:'90%',marginLeft:'5%'}}><button style={{marginLeft:'40%',width:'100px',height:'40px'}}><BiChevronsDown/></button></CRow>
                <h2 style={{margin:'3%',color:'#000015'}}>Popular Vendors:</h2>
                <CRow style={{width:'90%',marginLeft:'5%'}}>
                  <CCol xs="12" sm="6" md="4">
                  <CCard>
                      <CCardBody>
                        <CRow>
                          <CCol xs="12" sm="6" md="6"><img src="https://i.pinimg.com/474x/68/23/e5/6823e54b41e1649427d8e6f4cab03bbf.jpg" width="180" height="200" style={{border:'1px solid red',borderRadius:'50%'}}/></CCol>
                          <CCol xs="12" sm="6" md="6"><h5>Hassan Bilal</h5><p>Aibak Block, Sher Shah Road، New Garden Town،, Lahore, Punjab 54600</p></CCol>
                        </CRow>
                      </CCardBody>
                      <CCardFooter ><a href="#" style={{float:'right'}}>View</a></CCardFooter>
                    </CCard>
                  </CCol>
                  <CCol xs="12" sm="6" md="4">
                    <CCard >
                      <CCardBody >
                        <CRow >
                          <CCol><img src="https://i.pinimg.com/originals/7c/62/25/7c6225affa0cf0823a3568485c646967.jpg" width="180" height="200" style={{border:'1px solid red',borderRadius:'50%'}}/></CCol>
                          <CCol><h5>Saqib bilal</h5><p>Aibak Block, Sher Shah Road, Lahore, Punjab 54600</p></CCol>
                        </CRow>
                      </CCardBody>
                      <CCardFooter><a href="#" style={{float:'right'}}>View</a></CCardFooter>
                    </CCard>
                  </CCol>
                  <CCol xs="12" sm="6" md="4">
                    <CCard>
                      <CCardBody>
                        <CRow>
                          <CCol><img src="https://www.gamedesigning.org/wp-content/uploads/2020/01/Saul-Bass.jpg" width="180" height="200" style={{border:'1px solid red',borderRadius:'50%'}}/></CCol>
                          <CCol><h5>Amjad Malik</h5><p>Aibak Block, Sher Shah Road، New Garden Town،, Lahore, Punjab 54600</p></CCol>
                        </CRow>
                      </CCardBody>
                      <CCardFooter><a href="#" style={{float:'right'}}>View</a></CCardFooter>
                    </CCard>
                  </CCol>
                </CRow>
                <CRow style={{textAlign:'center',width:'90%',marginLeft:'5%'}}><button style={{marginLeft:'40%',width:'100px',height:'40px'}}><BiChevronsDown/></button></CRow>
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

export default SSRSHome;


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
