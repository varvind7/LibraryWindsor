import styled from 'styled-components';

export const Container = styled.div`
	border: 1px solid #e2e2e2;
	border-radius: 12px;
	text-align: center;
	width: 350px;
	position: absolute;
	left: 50%;
	top: 50%;
	padding: 1%;
	background: #f7f7f7;
	transform: translate(-50%, -50%);
	box-shadow: 0px 1px 4px 1px #e8e5e5;
	@media (max-width: 420px) {
		width: auto;
		max-width: 350px;
		min-width: 300px;
	}
	.container-title {
		i {
			font-size: 100px;
			color: #8888ff;
		}
		margin-bottom: 20px;
	}
	.container-body {
		.form-group {
			.forgot-part {
				.forgot {
					font-size: 15px;
					cursor: pointer;
					&:hover,
					&:focus {
						color: blue;
					}
				}
			}
			button {
				&:hover,
				&:focus {
					background: #484545;
					border-color: #484545;
					color: #fff;
				}
			}
		}
		.form-error {
			position: relative;
			top: 10px;
		}
	}
`;
