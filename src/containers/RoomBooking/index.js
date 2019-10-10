import React, { Component } from 'react';
import { Container, LoadDiv } from './booking.style';
import { List, Card, Popconfirm } from 'antd';
import roomsRecord from './rooms.json';
const { Meta } = Card;
class RoomBooking extends Component {
	state = {
		rooms: roomsRecord,
	};

	componentDidMount() {
		console.log('mounted');
	}

	componentDidUpdate(preProps, prevState) {}

	confirmRoom = index => {
		let { rooms } = JSON.parse(JSON.stringify(this.state));
		if (index >= 0) {
			rooms[index].is_booked = true;
		}
		this.setState({ rooms });
	};

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
								<Popconfirm
									disabled={room.is_booked}
									title="Do you want to book this room?"
									onConfirm={e => {
										this.confirmRoom(index);
									}}
									okText="Yes"
									cancelText="No"
								>
									<Card hoverable>
										<Meta title={room.name} description={room.description} />
									</Card>
								</Popconfirm>
							</LoadDiv>
						</List.Item>
					)}
				/>
			</Container>
		);
	}
}

export default RoomBooking;
