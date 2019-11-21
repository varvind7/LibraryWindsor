import React, { Component } from "react";
import { connect } from "react-redux";
import AppRouter from "./AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

export class App extends Component {
	state = {
		collapsed: false
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed
		});
	};

	render() {
		const { url } = this.props.match;
		const { collapsed } = this.state;
		return (
			<Layout>
				<Sider trigger={null} collapsible collapsed={collapsed}>
					<div className="logo" />
					<Menu
						theme="dark"
						mode="inline"
						defaultSelectedKeys={["1"]}
					>
						<Menu.Item key="1">
							<Link to="/user">
								<Icon type="user" />
								<span>Booking </span>
							</Link>
						</Menu.Item>
						<Menu.Item key="2">
							<Link to="/user/feedback">
								<Icon type="video-camera" />
								<span>Feedback</span>
							</Link>
						</Menu.Item>
						<Menu.Item key="3">
							<Link to="/user/bookingInfo">
								<Icon type="upload" />
								<span>Booking Info</span>
							</Link>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Header style={{ background: "#fff", padding: 0 }}>
						<Icon
							className="trigger"
							type={collapsed ? "menu-unfold" : "menu-fold"}
							onClick={this.toggle}
						/>
					</Header>
					<Content
						style={{
							margin: "24px 16px",
							padding: 24,
							background: "#fff",
							minHeight: 300
						}}
					>
						<AppRouter url={url} />
					</Content>
				</Layout>
			</Layout>
		);
	}
}

export default connect(
	state => ({
		...state
	}),
	{}
)(App);
