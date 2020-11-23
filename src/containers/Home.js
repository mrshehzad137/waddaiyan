import React, { Component } from 'react';
import image1 from '../assets/img/back1.jpg';
import { 
  CInput,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CInputGroupText,
  CLink,
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import TheHeader from './TheHeader';

class SSRSHome extends Component {
  render() {
    return (
        <body className="app" >
          <div>  
            <TheHeader/>
            <div className="app-body " >
              <main className="main" style={{backgroundImage: `url(${image1})`,height:"450px",width:'100%'}}>
                <div style={{height:"872px",backgroundColor:"#12202f",opacity:"0.6"}}>
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
                           <CLink to="./detailpage"> Search Event</CLink>
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="email" id="username" name="username" autoComplete="name"/>
                      </CInputGroup>
                    </div>
                    </div>
                  </div>
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
