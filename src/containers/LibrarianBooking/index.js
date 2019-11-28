import React, { Component } from "react";
import { Container } from "./booking.style";
import {
	Descriptions,
	Table,
	Divider,
	Button,
	Input,
	Popconfirm,
	Spin
} from "antd";
import { connect } from "react-redux";
import bookingActions from "../../redux/booking/actions";
import moment from "moment";
const { todayBooking, occupied, cancelBooking } = bookingActions;

class LibrarianBooking extends Component {
	state = {
		modal: false
	};

	componentDidMount() {
		this.props.todayBooking();
	}

	handleCancel = id => {
		this.props.cancelBooking(id);
	};

	occupy = id => {
		this.props.occupied(id);
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
			title: "Student Id",
			key: "student_id",
			render: (text, record, index) => {
				return `${record.user.reference_id}`;
			}
		},
		{
			title: "Student name",
			key: "student_name",
			render: (text, record, index) => {
				return `${record.user.first_name} ${record.user.last_name}`;
			}
		},
		{
			title: "Booking From",
			dataIndex: "booked_from",
			key: "booked_from",
			render: (text, record) => {
				let date = moment(
					`${record.booking_date} ${record.booked_from}`
				);
				let color = "rgba(0, 0, 0, 0.65)";
				if (moment().isAfter(date) && record.booking_status == 1) {
					color = "red";
				}
				return (
					<span style={{ color: color }}>
						{moment(text, "HH:mm:ss").format("hh:mm a")}
					</span>
				);
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
			key: "persons",
			width: 5
		},
		{
			title: "Requirenments",
			key: "additional_requirements",
			width: 5,
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
					case 3:
						status = "Cancelled By Librarian";
						break;
					case 4:
						status = "Cancelled By Student";
						break;
					default:
						status = "Undefined";
				}
				return status;
			}
		},
		{
			title: "Action",
			key: "action",
			width: 100,
			render: (text, record) => {
				if (record.booking_status === 1) {
					return (
						<div>
							<Popconfirm
								title="Confirm occupation?"
								okText="Yes"
								key={1}
								cancelText="No"
								onConfirm={() => this.occupy(record.id)}
							>
								<Button
									type="primary"
									shape="circle"
									icon="check"
									size={"small"}
								/>
							</Popconfirm>
							<Popconfirm
								title="Are you sure to cancel booking?"
								okText="Yes"
								key={2}
								cancelText="No"
								onConfirm={() => this.handleCancel(record.id)}
							>
								<Button
									style={{ marginLeft: "10px" }}
									type="danger"
									shape="circle"
									icon="close"
									size={"small"}
								/>
							</Popconfirm>
						</div>
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
					<Descriptions title="Today's Bookings"/>
					<Divider />
					<Table loading={loading} columns={this.tableColumns} dataSource={bookings} />
			</Container>
		);
	}
}

export default connect(
	state => ({
		...state.Booking
	}),
	{ todayBooking, occupied, cancelBooking }
)(LibrarianBooking);
