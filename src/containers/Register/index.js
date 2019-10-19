import React, { Component } from "react";
import { Formik, ErrorMessage } from "formik";
import { registerValidation } from "../validations";
import { ErrorBlock } from "../general.style";
import { connect } from "react-redux";
import registerActions from "../../redux/register/actions";
import { Spin, Input, Button, Form, Layout } from "antd";
const { checkToken, register } = registerActions;
const { Content } = Layout;
class Register extends Component {
	state = {};

	componentDidMount() {
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
	}

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
										email: details.email,
										password: "",
										confirm_password: "",
										name: "",
										reference_id: details.reference_id,
										user_type: details.user_type,
										last_day: details.last_day
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
												<Form.Item label="Full name">
													<Input
														placeholder="Enter your full name"
														name="name"
														onChange={handleChange}
													/>
													<ErrorMessage
														component={ErrorBlock}
														name="name"
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
														name="confirm_password"
														onChange={handleChange}
													/>
													<ErrorMessage
														component={ErrorBlock}
														name="confirm_password"
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
	{ checkToken, register }
)(Register);
