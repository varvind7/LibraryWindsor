import React, { Component } from "react";
import { Container, ModalForm } from "./booking.style";
import {
	Descriptions,
	Table,
	Divider,
	Modal,
	Button,
	Input,
	Form,
	TimePicker,
	InputNumber
} from "antd";
import { connect } from "react-redux";
import roomActions from "../../redux/roomBooking/actions";
import bookingActions from "../../redux/booking/actions";
import { Formik, ErrorMessage } from "formik";
import { newBooking } from "../validations";
import { ErrorBlock } from "../general.style";
import moment from "moment";
const { roomDetails } = roomActions;
const { bookingRequest, modalAction } = bookingActions;
const { TextArea } = Input;

const timeFormat = "HH:mm";

const tableColumns = [
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
		title: "No. of persons",
		dataIndex: "persons",
		key: "persons"
	},
	{
		title: "Booking Status",
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
			return status
		}
	}
];

class BookingDetails extends Component {
	state = {
		modal: false
	};

	submitMyForm = null;

	componentDidMount() {
		const {
			location: { state },
			history
		} = this.props;
		if (state && state.roomId) {
			this.props.roomDetails(state.roomId);
		} else {
			history.goBack();
		}
	}

	showModal = () => {
		this.props.modalAction(true);
	};
	hideModal = () => {
		this.props.modalAction(false);
	};

	disabledHours = (booked = null) => {
		var hours = [];
		for (var i = 0; i < moment().hour(); i++) {
			hours.push(i);
		}
		if (booked) {
			for (
				var i = 23;
				i >
				moment(booked)
					.add(3, "hours")
					.hour();
				i--
			) {
				hours.push(i);
			}
			for (var i = 0; i < moment(booked).hour(); i++) {
				hours.push(i);
			}
		}
		return hours;
	};

	disabledMinutes = (selectedHour, booked = null) => {
		var minutes = [];
		if (selectedHour === moment().hour()) {
			for (var i = 0; i < moment().minute(); i++) {
				minutes.push(i);
			}
		}
		if (booked) {
			if (
				selectedHour ==
				moment(booked)
					.add(3, "hours")
					.hour()
			) {
				for (var i = 60; i > moment(booked).minute(); i--) {
					minutes.push(i);
				}
			}
		}

		return minutes;
	};

	bindSubmitForm = submitForm => {
		this.submitMyForm = submitForm;
	};

	handleSubmitMyForm = e => {
		if (this.submitMyForm) {
			this.submitMyForm(e);
		}
	};

	componentDidUpdate(preProps, prevState) {}

	confirmRoom = index => {
		let { rooms } = JSON.parse(JSON.stringify(this.state));
		if (index >= 0) {
			rooms[index].is_booked = true;
		}
		this.setState({ rooms });
	};

	newBooking = data => {
		this.props.bookingRequest(data);
	};

	render() {
		const { room, loading, modal, submitLoading } = this.props;
		return (
			<Container>
				<div className="right-button">
					<Button icon="plus" type="primary" onClick={this.showModal}>
						Request Booking
					</Button>
				</div>

				<Descriptions title="Room Info" bordered>
					<Descriptions.Item label="Building">
						{room.building_type === 1
							? "Main building"
							: "West building"}
					</Descriptions.Item>
					<Descriptions.Item label="Room Floor">
						{room.floor}
					</Descriptions.Item>
					<Descriptions.Item label="Room number">
						{room.room_no}
					</Descriptions.Item>
				</Descriptions>
				<Divider />
				<Descriptions title="Today's Room Bookings"></Descriptions>
				<Table columns={tableColumns} dataSource={room.booking} />
				<Modal
					title="Booking Request"
					visible={modal}
					destroyOnClose
					onCancel={this.hideModal}
					footer={[
						<Button key="back" onClick={this.hideModal}>
							Cancel
						</Button>,
						<Button
							key="submit"
							type="primary"
							loading={submitLoading}
							onClick={this.handleSubmitMyForm}
						>
							Submit
						</Button>
					]}
				>
					<ModalForm>
						<Formik
							enableReinitialize
							initialValues={{
								room_id: room.id,
								booking_date: moment().format("YYYY-MM-DD"),
								booked_from: null,
								booked_to: null,
								persons: "",
								additional_requirements: ""
							}}
							validationSchema={newBooking}
							onSubmit={this.newBooking}
							render={({
								handleSubmit,
								handleChange,
								values,
								setFieldValue,
								submitForm
							}) => {
								this.bindSubmitForm(submitForm);
								return (
									<Form onSubmit={handleSubmit}>
										<Form.Item label="No. of persons">
											<InputNumber
												style={{ width: "100%" }}
												min={1}
												max={4}
												value={values.persons}
												placeholder="Add no. of persons"
												onChange={data => {
													setFieldValue(
														"persons",
														data
													);
												}}
											/>
											<ErrorMessage
												component={ErrorBlock}
												name="persons"
											/>
										</Form.Item>
										<Form.Item label="Booking From">
											<TimePicker
												style={{ width: "100%" }}
												format={timeFormat}
												disabledHours={
													this.disabledHours
												}
												disabledMinutes={
													this.disabledMinutes
												}
												value={values.booked_from}
												placeholder="Select time"
												onChange={data => {
													setFieldValue(
														"booked_from",
														data
													);
												}}
											/>
											<ErrorMessage
												component={ErrorBlock}
												name="booked_from"
											/>
										</Form.Item>
										<Form.Item label="Booking To">
											<TimePicker
												style={{ width: "100%" }}
												format={timeFormat}
												value={values.booked_to}
												disabledHours={this.disabledHours.bind(
													this,
													values.booked_from
												)}
												disabledMinutes={hour => {
													return this.disabledMinutes(
														hour,
														values.booked_from
													);
												}}
												placeholder="Select time"
												onChange={data => {
													setFieldValue(
														"booked_to",
														data
													);
												}}
											/>
											<ErrorMessage
												component={ErrorBlock}
												name="booked_to"
											/>
										</Form.Item>
										<Form.Item label="Additional Requirenments">
											<TextArea
												rows={4}
												name="additional_requirements"
												value={
													values.additional_requirements
												}
												onChange={handleChange}
											/>
											<ErrorMessage
												component={ErrorBlock}
												name="additional_requirements"
											/>
										</Form.Item>
									</Form>
								);
							}}
						/>
					</ModalForm>
				</Modal>
			</Container>
		);
	}
}

//export default RoomBooking;
export default connect(
	state => ({
		...state.RoomBooking,
		modal: state.Booking.modal,
		submitLoading: state.Booking.loading
	}),
	{ roomDetails, bookingRequest, modalAction }
)(BookingDetails);
