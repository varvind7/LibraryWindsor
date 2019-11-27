import React, { Component } from "react";
import { Container } from "./booking.style";
import { Descriptions, Table, Divider, Popconfirm, Spin } from "antd";
import { connect } from "react-redux";
import bookingActions from "../../redux/booking/actions";
import moment from "moment";
const { cancelBooking, myBooking } = bookingActions;

class MyBooking extends Component {
	state = {
		modal: false
	};

	componentDidMount() {
		this.props.myBooking();
	}

	handleCancel = id => {
		this.props.cancelBooking(id);
	};

	componentDidUpdate(preProps, prevState) {}

	tableColumns = [
		{
			title: "Room",
			key: "room",
			render: (text, record, index) => {
				return (
					<div>
						<p key={index}>
							{`Building:${
								record.room.building_type == 1 ? "Main" : "West"
							}`}
						</p>
						<p>{`Room:${record.room.room_no}`} </p>
					</div>
				);
			}
		},
		{
			title: "Booking From",
			dataIndex: "booked_from",
			key: "booked_from",
			render: text => {
				return moment(text, "HH:mm:ss").format("hh:mm a");
			}
		},
		{
			title: "Booking To",
			dataIndex: "booked_to",
			key: "booked_to",
			render: text => {
				return moment(text, "HH:mm:ss").format("hh:mm a");
			}
		},
		{
			title: "Persons",
			dataIndex: "persons",
			key: "persons"
		},
		{
			title: "Requirenments",
			key: "additional_requirements",
			render: (text, record) => {
				return record.additional_requirements == 1 ? "Yes" : "No";
			}
		},
		{
			title: "Status",
			dataIndex: "booking_status",
			key: "booking_status",
			render: text => {
				let status = "";

				switch (text) {
					case 1:
						status = "Booked";
						break;
					case 2:
						status = "Occupied";
						break;
					default:
						status = "Undefined";
				}
				return status;
			}
		},
		{
			title: "Action",
			render: (text, record) => {
				let today = moment().format("Y-M-D");
				let selection = moment(record.booking_date, "Y-M-D");
				if (
					moment(today).isSame(selection) &&
					record.booking_status === 1
				) {
					return (
						<Popconfirm
							title="Are you sure to cancel booking?"
							okText="Yes"
							cancelText="No"
							onConfirm={() => this.handleCancel(record.id)}
						>
							<a>Cancel</a>
						</Popconfirm>
					);
				} else {
					return <span> - </span>;
				}
			}
		}
	];

	render() {
		const { bookings, loading } = this.props;
		return (
			<Container>
				<Spin spinning={loading}>
					<Descriptions title="My Bookings"></Descriptions>
					<Divider />
					<Table columns={this.tableColumns} dataSource={bookings} />
				</Spin>
			</Container>
		);
	}
}

export default connect(
	state => ({
		...state.Booking
	}),
	{ myBooking, cancelBooking }
)(MyBooking);
