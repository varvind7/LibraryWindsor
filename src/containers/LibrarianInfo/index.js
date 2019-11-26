import React, { Component } from "react";
import { Row, Col,Divider,Form,Input,Button,Radio } from 'antd';
import { connect } from "react-redux";
// import librarianActions from "../../redux/LibrarianInfo/actions";
// const { librarianRoomDetails } = librarianActions;
class LibrarianInfo extends Component {

    
    constructor(props)
    {
        super(props);
        this.state={
            status:"Available",

        }
    }

    handleStatusChange = (event) => {
       
        console.log("Status changed");
        this.setState({
            status: event.target.value
          });
        console.log(this.state);
        
    }


    render() {

        let show=null;
        const hours=new Date();
        if(this.state.status=="key Requested" )
        {
            show=(
                <div>
                    <Row>
                        <Col span={6}>
                            <h5>Student Name</h5>
                        </Col>
                        <Col span={6}>
                        <Input type="text" name="studentName" value="Student Name who booked" disabled/>
                           
                            </Col>               
    
                    </Row>
                    
                    <br/>
                    <Row>
                        <Col span={6}>
                            <h5>Start Time</h5>
                        </Col>
                        <Col span={6}>
                        <Input type="text" name="startTime" value="Start Time" disabled/>
                           
                            </Col>               
    
                    </Row>
                    
                    <br/>
                    <Row>
                        <Col span={6}>
                            <h5>End Time</h5>
                        </Col>
                        <Col span={6}>
                        <Input type="text" name="endTime" value="End Time" disabled/>
                           
                            </Col>               
    
                    </Row>
                    
                    <br/>
                    
                </div>
            );
    

        }

        if( this.state.status=="Booked")
        {
            show=(
                <div>
                    <Row>
                        <Col span={6}>
                            <h5>Student Name</h5>
                        </Col>
                        <Col span={6}>
                        <Input type="text" name="studentName" value="" placeholder="Student Name who booked" required/>
                           
                            </Col>               
    
                    </Row>
                    
                    <br/>
                    <Row>
                        <Col span={6}>
                            <h5>Start Time</h5>
                        </Col>
                        <Col span={6}>
                        <Input type="text" name="startTime" value={hours} format="HH:mm:ss" placeholder="Start Time" required/>
                           
                            </Col>               
    
                    </Row>
                    
                    <br/>
                    <Row>
                        <Col span={6}>
                            <h5>End Time</h5>
                        </Col>
                        <Col span={6}>
                        <Input type="text" name="endTime" value="" placeholder="End Time" required/>
                           
                            </Col>               
    
                    </Row>
                    
                    <br/>
                    
                </div>
            );
    

        }

        return(
            <div>
                <div>
                <Row>
                <Col span={12} offset={6}>
                <h1>Room Status</h1>
                 </Col>
                </Row>
                </div>
                <Divider orientation="left">Room Number should be here</Divider>
                <Form onSubmit={this.handleSubmit}>
                {show}
                
                <Row>
                    <Col span={6}>
                        <h5>Status</h5>
                    </Col>
                    <Col span={8}>
                <Radio.Group onChange={this.handleStatusChange}>
                     <Radio.Button value="Available">Available</Radio.Button>
                     <Radio.Button value="key Requested">Key Requested</Radio.Button>
                      <Radio.Button value="Booked">Booked</Radio.Button>
                </Radio.Group>
                </Col>               

                </Row>
                <br/>
                <Row>
                    <Col span={6} offset={6}>
                <Input type="submit" value="submit"/>
                </Col>               

                </Row>
                    </Form>
                
            </div>
        )
    }
}
export default connect(
	state => ({
		// ...state.LibrarianInfo
        ...state
	}),
	{  }
)(LibrarianInfo);