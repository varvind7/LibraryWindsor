import styled from 'styled-components';

export const Container = styled.div`
	border: 1px solid #e2e2e2;
	border-radius: 12px;
	text-align: center;
	min-width: 300px;
	max-width: 400px;
	position: absolute;
	left: 50%;
	top: 50%;
	padding: 1%;
	background: #f7f7f7;
	transform: translate(-50%, -50%);
	box-shadow: 0px 1px 4px 1px #e8e5e5;
	.container-title {
		i {
			font-size: 100px;
			color: orange;
		}
	}
	.container-body {
		font-size: 20px;
		font-weight: bold;
		margin: 4% 0 1% 0;
	}
`;
