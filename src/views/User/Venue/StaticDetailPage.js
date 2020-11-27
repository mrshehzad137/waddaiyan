import React, { Component } from 'react';
import {
    CRow,
    CCardFooter,
    CCardBody,
    CCard,
    CCol,
    CButton,
    CTextarea
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import TheHeader from '../../../containers/TheHeader';
import hallimage from '../../../assets/img/det.webp'
import { AiOutlineStar, AiFillPhone } from "react-icons/ai";
import img from '../../../assets/img/profile.png'
import withAuth from '../../withAuth';
import AuthService from '../../AuthTest';
import Axios from 'axios'
const datapicture = [
    "https://image.shutterstock.com/image-photo/wedding-venue-260nw-604904363.jpg", "https://i.insider.com/5e67f940235c1804fd14aba9?width=1100&format=jpeg&auto=webp", "https://blog.e360.pk/wp-content/uploads/2020/03/Wedding-Venues-and-Vehicles-for-a-Memorable-Event.jpg", "https://www.thestatesman.com/wp-content/uploads/2019/07/Wedding-Venue.jpg", "https://blog.bridals.pk/wp-content/uploads/2019/02/Banner-2.jpg",
    "https://www.brides.com/thmb/0sOaZ3sx3JI5fdvHe3Gej0x813o=/3759x2114/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__brides__proteus__585acc1e54421cf15eb0e0b8__169-6741927d00934d1d942b4e2e8c2ab990.jpeg", "https://gmgweddingservices.com/wp-content/uploads/2020/05/Wedding-Venue.jpg", "https://blog.bridals.pk/wp-content/uploads/2018/10/reception-decor-hacks-banner.jpg", "https://weddingpakistani.com/wp-content/uploads/2012/02/20-Best-Wedding-Venues-in-Pakistan.jpg", "https://blog.radissonblu.com/wp-content/uploads/2019/07/Radisson-Blu-Hotell-Kuwait-wedding-veunue-on-boat-Al-Hashemi-II.jpg", "https://cdn.diys.com/wp-content/uploads/2018/05/franscican-garden-wedding-venue.jpg", "https://blog.bridals.pk/wp-content/uploads/2018/11/sems-2.jpg", "https://i.pinimg.com/originals/9c/01/f5/9c01f50987a59c007d04c0a768fd6ebd.jpg",
]
class StaticDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staticdata: "",
        }
        this.auth = new AuthService();


    }
    componentDidMount() {
        console.log("props.match.params.id", this.props.history.location.pathname.substring(23))
        const id = this.props.history.location.pathname.substring(23)
        // const useris=localStorage.getItem('uid');
        Axios.get(`/api/vendor/get/venue/${id}`)
            .then(res => {
                this.setState({ staticdata: res.data.venue })
                console.log(res.data.venue);
            })

            .catch(err => {
                alert("Venue get Failed");

            })
    }
    render() {
        return (
            <body className="app" >
                <TheHeader />
                <div style={{ marginTop: 180, marginLeft: 35, marginRight: 35 }}>
                    <div style={{ justifyContent: 'center', textAlign: 'center' }}>
                        <CRow>
                            <CCol xs="12" sm="12" md="12">
                                <img src={datapicture[Math.floor(Math.random() * 12)]} style={{ width: '80%' }}></img>


                            </CCol>
                            <CCol xs="12" sm="12" md="12">
                                <CCard style={{ border: 'black', width: '70%', marginLeft: '15%', marginTop: '-45px' }}>

                                    <CCardBody>

                                        <div style={{ justifyContent: 'space-between', display: 'flex', paddingTop: 10 }}>
                                            <p style={{ fontWeight: 'bold', float: 'left', fontSize: 22 }}>{this.state.staticdata.name}</p>
                                            <p style={{ fontWeight: 'bold', float: 'right', backgroundColor: 'green', color: 'white', textAlign: 'center', minWidth: 80, height: 30 }}><AiOutlineStar />  {this.state.staticdata.rating}</p>
                                        </div>
                                        <div style={{ justifyContent: 'space-between', display: 'flex', lineHeight: 0 }}>
                                            <p style={{ fontWeight: 'bold', float: 'left', opacity: 0.5 }}>{this.state.staticdata.description}</p>

                                        </div>
                                        <div style={{ justifyContent: 'space-between', display: 'flex', lineHeight: 0 }}>
                                            <p style={{ fontWeight: 'bold', float: 'left', color: 'green', paddingTop: 20, fontSize: 20 }}>{this.state.staticdata.location}</p>

                                        </div>

                                    </CCardBody>

                                </CCard>

                            </CCol>


                            {/* <div style={{ backgroundColor: 'white', width: '90%', justifyContent: 'center', marginLeft: '5%', marginRight: '5%', marginBottom: 50 }}>
                                {data.map(x =>

                                    <CCol xs="12" sm="12" md="12">
                                        <div style={{ display: 'flex', width: '100%' }}>
                                            <img src={img} style={{ width: 60, height: 60, borderRadius: 99, marginTop: 20 }}></img>
                                            <h6 style={{ fontSize: 18, marginTop: 30, paddingLeft: 10 }}>{x.title}</h6>
                                            <p style={{ fontWeight: 'bold', backgroundColor: 'green', color: 'white', minWidth: 80, height: 30, marginTop: 30, marginLeft: 50 }}><AiOutlineStar />  4.9</p>
                                        </div>
                                        <p style={{ float: 'left', paddingLeft: 30, width: '100%', marginBottom: 10, }}>{x.description}</p>


                                    </CCol>

                                )}
                            </div> */}
                        </CRow>
                    </div>
                    <CRow>

                        <div style={{ backgroundColor: 'white', width: '90%', marginLeft: '5%', marginRight: '5%', marginBottom: 10, minHeight: 300, display: 'flex', }}>
                            <CCol xs="12" sm="12" md="5">




                                <div >
                                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                                        <p style={{ fontWeight: 'bold', float: 'left', marginTop: '10%' }}>{this.state.staticdata.name}</p>
                                        <p style={{ fontWeight: 'bold', float: 'right', backgroundColor: 'green', color: 'white', textAlign: 'center', minWidth: 80, height: 30, marginTop: '10%' }}><AiOutlineStar />  {this.state.staticdata.rating}</p>

                                    </div>
                                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                                        <p style={{ fontWeight: 'bold', float: 'left', }}>{this.state.staticdata.location}</p>

                                        <p style={{ fontWeight: 'bold', float: 'right' }}>21 Reviews</p>

                                    </div>




                                </div>
                            </CCol>
                            <CCol xs="12" sm="12" md="7">
                                <p style={{ marginTop: 50, float: 'left', fontSize: 18, fontWeight: 'bold' }}>Review Mallu Farms</p>
                                <CTextarea
                                    name="textarea-input"
                                    id="textarea-input"
                                    rows="9"
                                    placeholder="Add your review..."
                                />

                                <CButton color="success" style={{ width: 200, height: 45, float: 'right', marginTop: 50 }} >Submit Review</CButton>

                            </CCol>
                        </div>
                    </CRow>


                </div>
            </body>
        );
    }
}
export default withAuth(StaticDetailPage);
