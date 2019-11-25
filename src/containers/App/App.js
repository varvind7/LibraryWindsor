import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppRouter from './AppRouter';

import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content } = Layout;

export class App extends Component {
	state = {
		collapsed: false,
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};

	render() {
		const { url } = this.props.match;
		const {collapsed} = this.state
		return (
			<Layout>
				<Sider trigger={null} collapsible collapsed={collapsed}>
					<div className="logo" />
					<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
						<Menu.Item key="1">
							<Icon type="user" />
							<span>nav 1</span>
						</Menu.Item>
						<Menu.Item key="2">
							<Icon type="video-camera" />
							<span>nav 2</span>
						</Menu.Item>
						<Menu.Item key="3">
							<Icon type="upload" />
							<span>nav 3</span>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Header style={{ background: '#fff', padding: 0 }}>
						<Icon
							className="trigger"
							type={collapsed ? 'menu-unfold' : 'menu-fold'}
							onClick={this.toggle}
						/>
					</Header>
					<Content
						style={{
							margin: '24px 16px',
							padding: 24,
							background: '#fff',
							minHeight: 300,
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
		...state,
	}),
	{},
)(App);
