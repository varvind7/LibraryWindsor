import React, { Component } from "react";
import { Row, Col, PageHeader, Carousel, Layout } from 'antd';

import logo from './logo.png';
import leddy1 from './leddy3.png';
import leddy2 from './leddy1.jpg';
import leddy3 from './leddy2.jpg';
import { Typography, Divider } from 'antd';
import './styles.css'
const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;
class LandingPage extends Component {


    render() {
        return (
            <div>
                <PageHeader
                    style={{
                        border: '1px solid rgb(235, 237, 240)',
                    }}

                    title="University of Windsor"
                    subTitle="Leddy Library"
                    avatar={{ src: logo, size: "large" }}

                />
                <div>
                    <br />
                    <Carousel autoplay>
                        <div>
                        <img className="center" style={{alignContent:'middle'}} src={require('./leddy3.jpg')} />
                        </div>
                        <div>
                        <img className="center" style={{alignContent:'middle'}} src={require('./leddy1.jpg')} />
                        </div>
                        <div>
                        <img className="center" style={{alignContent:'middle'}} src={require('./leddy2.jpg')} />
                        </div>
                        
                    </Carousel>
                    <br/>
                    <Row>
                        <Col span="14" offset="2">

                            <Title style={{ color: '#005595' }}>Welcome to Leddy Library's Group Study Room</Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col offset="1">
                            
                            <h5 >The Purpose of the group study rooms is to accomodate the small group, self-directed learning requirements of University of Windsor academic programs.</h5>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col span="16" offset="1">
                            <div style={{ background: '#005595', padding: "20px", boxShadow: "0 0 5px 5px", borderRadius: "10px" }}>
                                <h3 style={{ color: '#ffce00' }}>Getting a Group Study Room:</h3>
                                <ul>

                                    <li >Rooms are Available on a first-come-first-serve basis</li>
                                    <br />
                                    <li>4 group study rooms are available on the 3rd floor,Main Building</li>
                                    <br />
                                    <li>1 quiet study room is available on the 2nd floor,Main Building</li>
                                    <br />
                                    <li>Use of group study rooms is limited to current faculty,staff and students. You must have a valid UWin card to sign out a group study room key</li>
                                    <br />
                                    <li>Room keys are signed out of patrons for 3 hours only</li>
                                    <br />
                                    <li>Renewals are generally not permitted. However, if another group study room is available at the end of the 3-hour loan period, patrons may sign their group study roomkey out for another 3 hour period.</li>
                                    <br />
                                    <li>Failures to follow the Group Study Room Use Guidelines and other general library policies may result in a suspension of group study room use privileges.</li>
                                    <br />
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
                <br/>
                <Footer style={{ textAlign: 'center' }}>
                University of Windsor ©2019 Created by 
                <br/>
                Arvind
                <br/>
                Ramya
                <br/>
                Raj
                </Footer>

            </div>
        );
    }
}
export default LandingPage;