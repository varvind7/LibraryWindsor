import styled from 'styled-components';

const Container = styled.div`
	background: #fff;
	padding: 24px;
	min-height: 280px;
	& .ant-row {
		.ant-col {
			.ant-card {
				margin: 4%;
				@media (max-width: 767px) {
					margin: 2%;
				}
			}
		}
	}
	.second-row {
		text-align: center;
		margin-top: 6%;
		.ant-btn {
			padding: 1%;
			vertical-align: middle;
			line-height: 1px;
			width: 50%;
		}
	}
`;

const LoadDiv = styled.div`
	background: ${props => (props.green ? 'green' : 'white')};
`;

export { Container, LoadDiv };
