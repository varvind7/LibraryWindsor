import React from "react";
import { connect } from "react-redux";
import { Container } from "./feedback.style";
import { Form, Input, Button, Select, Descriptions } from "antd";
import roomActions from "../../redux/roomBooking/actions";
import feedbackActions from "../../redux/feedback/actions";
import { Formik, ErrorMessage } from "formik";
import { ErrorBlock } from "../general.style";
import { feedbackValidation } from "../validations";

const { roomBooking } = roomActions;
const { feedback } = feedbackActions;
const { Option } = Select;
const { TextArea } = Input;

class Feedback extends React.Component {
	state = {};

	componentDidMount() {
		this.props.roomBooking();
	}

	handleSubmit = data => {
		this.props.feedback(data);
	};
	render() {
		const { rooms } = this.props;
		return (
			<Container>
				<Descriptions title="Provide Your Feedback" />
				<Formik
					enableReinitialize
					initialValues={{
						room_id: undefined,
						feedback: ""
					}}
					validationSchema={feedbackValidation}
					onSubmit={this.handleSubmit}
					render={({
						handleSubmit,
						handleChange,
						values,
						setFieldValue
					}) => {
						return (
							<Form onSubmit={handleSubmit}>
								<Form.Item label="Select Room">
									<Select
										style={{ width: "100%" }}
										value={values.room_id}
										placeholder="Select room"
										onChange={value => {
											setFieldValue("room_id", value);
										}}
									>
										{rooms.map((room, index) => {
											return (
												<Option
													value={room.id}
													key={index}
												>{`Building:${
													room.building_type == 1
														? "Main"
														: "West"
												}/Room: ${
													room.room_no
												}`}</Option>
											);
										})}
									</Select>
									<ErrorMessage
										component={ErrorBlock}
										name="room_id"
									/>
								</Form.Item>
								<Form.Item
									label="Feedback"
									value={values.feedback}
								>
									<TextArea
										rows={4}
										placeholder="Provide feedback"
										name="feedback"
										onChange={handleChange}
									/>
									<ErrorMessage
										component={ErrorBlock}
										name="feedback"
									/>
								</Form.Item>
								<div className="button-right">
									<Button type="primary" htmlType="submit">
										Submit
									</Button>
								</div>
							</Form>
						);
					}}
				/>
			</Container>
		);
	}
}

export default connect(
	state => ({
		rooms: state.RoomBooking.rooms
	}),
	{ roomBooking, feedback }
)(Feedback);
