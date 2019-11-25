import React, { Component } from 'react';
import { Container } from './invalid.style';
import {Icon} from 'antd'
class Invalid extends Component {
	state = {
		message: 'Oops! Something went wrong, please try again later.',
	};

	componentDidMount() {
		const { state } = this.props.location;
		if (state && state.message) {
			this.setState({
				message: state.message,
			});
		}
	}

	render() {
		const { message } = this.state;
		return (
			<Container>
				<div className="container-title">
					<Icon type="warning" />
				</div>
				<div className="container-body"> {message} </div>
			</Container>
		);
	}
}

export default Invalid;
