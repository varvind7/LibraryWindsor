import React from "react";
import { connect } from "react-redux";
import { Container } from "./feedback.style";
import { Form, Input, Button, Select, Descriptions } from "antd";
import feedbackActions from "../../redux/feedback/actions";
import { Formik, ErrorMessage } from "formik";
import { ErrorBlock } from "../general.style";
import { feedbackValidation } from "../validations";

const { feedback, getRooms } = feedbackActions;
const { Option } = Select;
const { TextArea } = Input;

class Feedback extends React.Component {
	state = {};

	componentDidMount() {
		this.props.getRooms();
	}

	formReset = null;

	componentDidUpdate(prevProps) {
		const { action, history } = this.props;
		if (prevProps.action != action) {
			if (action === "FEEDBACK_SUCCESS") {
				this.formReset({});
			}
		}
	}

	handleSubmit = (data, { resetForm }) => {
		this.props.feedback(data);
		this.formReset = resetForm;
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
								<Form.Item label="Feedback">
									<TextArea
										value={values.feedback}
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
		...state.Feedback
	}),
	{ feedback, getRooms }
)(Feedback);
