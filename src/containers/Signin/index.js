import React, { Component } from "react";
import { Container } from "./signin.style";
import { Formik, ErrorMessage } from "formik";
import { signIn } from "../validations";
import { ErrorBlock } from "../general.style";
import { connect } from "react-redux";
import authActions from "../../redux/auth/actions";
import { notification, Spin, Input, Button, Icon, Form } from "antd";
const { login } = authActions;
class SignIn extends Component {
	state = {};

	componentDidMount() {
		const { isLoggedIn, user, history } = this.props;
		const token = localStorage.auth_token;
		if (isLoggedIn && user && user.user_type && token) {
			if (user.user_type == 1) {
				history.push("/user");
			} else if (user.user_type == 2) {
				history.push("/librarian");
			} else {
				localStorage.clear();
			}
		} else {
			localStorage.clear();
		}
	}

	componentDidUpdate = prevProps => {};

	onRegister = () => {
		this.props.history.push("/register");
	};

	handleSubmit = data => {
		this.props.login(data);
	};

	render() {
		const { loading } = this.props;
		return (
			<Container>
				<Spin spinning={loading} size="large">
					<div className="container-title">
						<Icon type="user" />
					</div>
					<div className="container-body">
						<Formik
							initialValues={{
								email: "",
								password: ""
							}}
							validationSchema={signIn}
							onSubmit={this.handleSubmit}
							render={({
								handleSubmit,
								handleChange,
								values
							}) => (
								<Form onSubmit={handleSubmit}>
									<Form.Item>
										<Input
											type="email"
											onChange={handleChange}
											value={values.email}
											name="email"
											placeholder="Email address"
										/>
										<ErrorMessage
											bottom
											component={ErrorBlock}
											name="email"
										/>
									</Form.Item>
									<Form.Item>
										<Input
											type="password"
											onChange={handleChange}
											value={values.password}
											name="password"
											placeholder="Password"
										/>
										<ErrorMessage
											bottom
											component={ErrorBlock}
											name="password"
										/>
									</Form.Item>
									<Button
										htmlType="submit"
										className="btn"
										type="primary"
									>
										Signin
									</Button>
								</Form>
							)}
						/>
						<hr className="divider" />
						<div className="form-group">
							<div className="forgot-part text-right">
								<span
									className="forgot"
									onClick={this.onRegister}
								>
									Register your account?
								</span>
							</div>
						</div>
					</div>
				</Spin>
			</Container>
		);
	}
}

export default connect(
	state => ({
		isLoggedIn: state.Auth.token !== null,
		...state.Auth
	}),
	{ login }
)(SignIn);
