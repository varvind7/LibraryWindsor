import React, { Component } from "react";
import { Formik, ErrorMessage } from "formik";
import { registerValidation } from "../validations";
import { ErrorBlock } from "../general.style";
import { connect } from "react-redux";
import registerActions from "../../redux/register/actions";
import { Spin, Input, Button, Form, Layout } from "antd";
const { register } = registerActions;
const { Content } = Layout;
class Register extends Component {
	state = {};

	componentDidMount() {/*
		const {
			location: { search },
			history
		} = this.props;
		if (search) {
			const params = new URLSearchParams(search);
			const token = params.get("token");
			if (token) {
				return this.props.checkToken(token);
			}
		}
		history.push({
			pathname: "/invalid",
			state: { message: "Please provide valid URL." }
		});
	*/}

	handleSubmit = data => {
		this.props.register(data);
	};

	render() {
		const formItemLayout = {
			labelCol: {
				xs: { span: 24 },
				sm: { span: 8 }
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 16 }
			}
		};
		const tailFormItemLayout = {
			wrapperCol: {
				xs: {
					span: 24,
					offset: 0
				},
				sm: {
					span: 16,
					offset: 8
				}
			}
		};
		const { loading, details } = this.props;
		return (
			<div>
				<Spin spinning={loading} size="large">
					<Layout className="layout">
						<Content style={{ padding: "50px" }}>
							<div
								style={{
									background: "#fff",
									padding: 24,
									minHeight: 280
								}}
							>
								<Formik
									enableReinitialize
									initialValues={{
										email: "",
										password: "",
										password_confirmation: "",
										first_name: "",
										last_name: "",
										reference_id: "",
										last_day: "2020-12-11"
									}}
									validationSchema={registerValidation}
									onSubmit={this.handleSubmit}
									render={({
										handleSubmit,
										handleChange,
										values,
										errors
									}) => {
										return (
											<Form
												onSubmit={handleSubmit}
												{...formItemLayout}
												layout="vertical"
											>
												<Form.Item label="First name">
													<Input
														placeholder="Enter your first name"
														name="first_name"
														onChange={handleChange}
													/>
													<ErrorMessage
														component={ErrorBlock}
														name="first_name"
													/>
												</Form.Item>
												<Form.Item label="Last name">
													<Input
														placeholder="Enter your last name"
														name="last_name"
														onChange={handleChange}
													/>
													<ErrorMessage
														component={ErrorBlock}
														name="last_name"
													/>
												</Form.Item>
												<Form.Item label="Student ID">
													<Input
														placeholder="Enter your student ID"
														name="reference_id"
														onChange={handleChange}
													/>
													<ErrorMessage
														component={ErrorBlock}
														name="reference_id"
													/>
												</Form.Item>
												<Form.Item
													label="Email Address"
													hasFeedback
												>
													<Input
														placeholder="Enter your email address"
														name="email"
														onChange={handleChange}
													/>
													<ErrorMessage
														component={ErrorBlock}
														name="email"
													/>
												</Form.Item>
												<Form.Item
													label="Password"
													hasFeedback
												>
													<Input.Password
														placeholder="Enter your password"
														name="password"
														onChange={handleChange}
													/>
													<ErrorMessage
														component={ErrorBlock}
														name="password"
													/>
												</Form.Item>
												<Form.Item
													label="Confirm Password"
													hasFeedback
												>
													<Input.Password
														placeholder="Confirm your password"
														name="password_confirmation"
														onChange={handleChange}
													/>
													<ErrorMessage
														component={ErrorBlock}
														name="password_confirmation"
													/>
												</Form.Item>
												<Form.Item
													{...tailFormItemLayout}
												>
													<Button
														type="primary"
														htmlType="submit"
													>
														Register
													</Button>
												</Form.Item>
											</Form>
										);
									}}
								/>
							</div>
						</Content>
					</Layout>
				</Spin>
			</div>
		);
	}
}

export default connect(
	state => ({
		...state.Register
	}),
	{ register }
)(Register);
