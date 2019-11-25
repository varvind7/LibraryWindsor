import React, { Component } from "react";
import { Jumbotron, Button, Container, Row, Col } from "reactstrap";
class BookingInfo extends Component {
  state = {
    roomno: 2
  };
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Group Study Rooms in Leddy Library</h1>

          <p className="lead">
            The purpose of the group study rooms is to accomodate the small
            group, self-directed learning requirements of University of Windsor
            academic programs.
          </p>
          <hr className="my-2" />
          <h4>
            <u>Group Study Room Use Guidelines</u>
          </h4>
          <ul>
            <li>Leave the room in the same condition that it was found.</li>
            <li>Lock the door when the room is vacated</li>
            <li>
              Group Study rooms are intended for quiet discussion only. Be
              considerate of others studying nearby. Group study room walls do
              not extend all the way to the ceiling so noise travels
              significantly
            </li>
            <li>Study rooms should not replace classrooms</li>
            <li>
              Regular food and drink policy strictly applies - no food allowed
            </li>
            <li>Rooms can take 1- 4 people only</li>
            <li>
              Patrons are responsible for damages to the room and the room keys.
              Standard key replacement cost is $50.00. Other room damages will
              be assessed as needed
            </li>
            <li>
              Vacate the study room when your time is up. You will fined for
              late return key
            </li>
            <li>
              Ensure at least one person occupies the room at all times during
              the use of the room
            </li>
            <li>
              Personal items should not be left unattended in the group study
              rooms. The library is not responsible for the loss or damage of
              items
            </li>
          </ul>
        </Jumbotron>

        <Container>
          <div>
            <h4 className="display-4">Booking Room Information</h4>
          </div>
          <hr className="my-2" />
          <br />
          <Row>
            <Col xs="3">
              <h5>Room no: </h5>
            </Col>
            <Col xs="6">
              {" "}
              <input
                type="text"
                name="roomNumber"
                value={this.state.roomno}
                readOnly
              />
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col xs="3">
              <h5>In Time </h5>
            </Col>
            <Col xs="6">
              {" "}
              <input
                type="text"
                name="roomNumber"
                value="Current Time+3 hrs"
                readOnly
              />
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col xs="3">
              <h5>Out Time </h5>
            </Col>
            <Col xs="6">
              {" "}
              <input
                type="text"
                name="roomNumber"
                value="Booking Time plus+3 hrs"
                readOnly
              />
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col xs="3">
              <h5>Number of Occupants: </h5>
            </Col>
            <Col xs="6">
              {" "}
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col xs="3">
              <h5>Stationary needed? </h5>
            </Col>
            <Col xs="1">
              {" "}
              Yes <input type="radio" name="Stationary" value="Yes" />
            </Col>
            <Col xs="1">
              No
              <input type="radio" name="Stationary" value="No" />
            </Col>
          </Row>
          <br />
          <br />

          <Row>
            <Col sm="4 offset-5">
              <Button color="primary">Book Room</Button>
            </Col>
          </Row>
          <br />
          <br />
        </Container>
      </div>
    );
  }
}

export default BookingInfo;
