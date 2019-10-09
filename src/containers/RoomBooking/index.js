import React, { Component } from 'react';

class RoomBooking extends Component {
	state = {};

	componentDidMount() {
		console.log('mounted');
	}

	componentDidUpdate(preProps, prevState) {
		console.log(this.props);
	}

	render() {
		return <div> Booking Page </div>;
	}
}

export default RoomBooking;
