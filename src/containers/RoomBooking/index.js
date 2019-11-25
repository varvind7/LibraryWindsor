import React, { Component } from 'react';
import { Container, LoadDiv } from './booking.style';
import { List, Card, Popconfirm } from 'antd';
import { connect } from "react-redux";
import roomsRecord from './rooms.json';
import registerActions from "../../redux/roomBooking/actions";
const { roomBooking } = registerActions;
const { Meta } = Card;
class RoomBooking extends Component {
	state = {
		rooms: roomsRecord,
	};

	componentDidMount() {
		this.props.roomBooking();
	}

	componentDidUpdate(preProps, prevState) {}

	confirmRoom = index => {
		let { rooms } = JSON.parse(JSON.stringify(this.state));
		if (index >= 0) {
			rooms[index].is_booked = true;
		}
		this.setState({ rooms });
	};

	/*this.props.history.push({
		pathname:"/user/bookingDetails",
		state: {roomId: index}
	});*/
	

	render() {
		const { rooms } = this.state;
		return (
			<Container>
				<List
					grid={{
						gutter: 16,
						xs: 1,
						sm: 2,
						md: 3,
						lg: 3,
						xl: 4,
						xxl: 6,
					}}
					dataSource={rooms}
					renderItem={(room, index) => (
						<List.Item>
							<LoadDiv green={room.is_booked}>
							{/*	<Popconfirm
									disabled={room.is_booked}
									title="Do you want to book this room?"
									onConfirm={e => {
										this.confirmRoom(index);
									}}
									okText="Yes"
									cancelText="No"
								>*/}
									<Card hoverable onClick= {e => {
										this.confirmRoom(index);
									}}>
										<Meta title={room.name} description={room.description} />
									</Card>
								{/*</Popconfirm>*/}
							</LoadDiv>
						</List.Item>
					)}
				/>
			</Container>
		);
	}
}

//export default RoomBooking;
export default connect(
	state => ({
		...state.RoomBooking
	}),
	{ roomBooking }
)(RoomBooking);
