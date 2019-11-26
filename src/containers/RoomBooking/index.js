import React, { Component } from "react";
import { Container, LoadDiv } from "./booking.style";
import { List, Card, Popconfirm } from "antd";
import { connect } from "react-redux";
import roomsRecord from "./rooms.json";
import roomActions from "../../redux/roomBooking/actions";
const { roomBooking } = roomActions;
const { Meta } = Card;
class RoomBooking extends Component {
	state = {
		rooms: roomsRecord
	};

	componentDidMount() {
		this.props.roomBooking();
	}

	componentDidUpdate(preProps, prevState) {}

	confirmRoom = roomId => {
		const { history } = this.props;
		// let { rooms } = JSON.parse(JSON.stringify(this.state));
		// if (index >= 0) {
		// 	rooms[index].is_booked = true;
		// }
		// this.setState({ rooms });
		history.push({
			pathname: "/user/bookingDetails",
			state: { roomId }
		});
	};

	/*this.props.history.push({
		pathname:"/user/bookingDetails",
		state: {roomId: index}
	});*/

	render() {
		const { rooms } = this.props;
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
						xxl: 6
					}}
					dataSource={rooms}
					renderItem={(room, index) => (
						<List.Item>
							<LoadDiv green={room.is_booked}>
								<Card
									hoverable
									onClick={e => {
										this.confirmRoom(room.id);
									}}
								>
									<Meta
										title={`Room Number: ${room.room_no}`}
										description={`Building :${
											room.building_type == 1
												? "Main"
												: "West"
										}, Floor:${room.floor}`}
									/>
								</Card>
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
