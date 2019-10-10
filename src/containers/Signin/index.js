import React, { Component } from 'react';
import { Container } from './signin.style';
import { Formik, ErrorMessage } from 'formik';
import { signIn } from '../validations';
import { ErrorBlock } from '../general.style';
import { connect } from 'react-redux';
import authActions from '../../redux/auth/actions';
import { notification, Spin, Input, Button, Icon } from 'antd';
const { login } = authActions;
class SignIn extends Component {
	state = {};

	componentDidMount() {
		if (this.props.isLoggedIn) {
			this.props.history.push('/user');
		}
	}

	componentDidUpdate = prevProps => {
		const { message } = this.props;
		if (message && message !== prevProps.message) {
			notification.error({
				message,
			});
		}
	};

	onForgotPassword = () => {
		console.log('user forgot the password');
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
						<Icon type="user"/>
					</div>
					<div className="container-body">
						<Formik
							initialValues={{
								email: '',
								password: '',
							}}
							validationSchema={signIn}
							onSubmit={this.handleSubmit}
							render={({ handleSubmit, handleChange, values }) => (
								<form onSubmit={handleSubmit}>
									<div className="form-group">
										<div className="control">
											<Input
												type="email"
												onChange={handleChange}
												value={values.email}
												name="email"
												placeholder="Email address"
											/>
										</div>
									</div>
									<div className="form-error">
										<ErrorMessage component={ErrorBlock} name="email" />
									</div>
									<div className="form-group">
										<div className="control">
											<Input
												type="password"
												onChange={handleChange}
												value={values.password}
												name="password"
												placeholder="Password"
											/>
										</div>
									</div>
									<div className="form-error">
										<ErrorMessage component={ErrorBlock} name="password" />
									</div>
									<div className="form-group">
										<div className="control">
											<Button htmlType="submit" className="btn" type="primary">
												Signin
											</Button>
										</div>
									</div>
								</form>
							)}
						/>
						<hr className="divider" />
						<div className="form-group">
							<div className="forgot-part text-right">
								<span className="forgot" onClick={this.onForgotPassword}>
									forgot your password?
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
		...state.Auth,
	}),
	{ login },
)(SignIn);
