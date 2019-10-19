import styled from "styled-components";
import { Input as FormInput, Select as FormSelect } from "antd";

export const ErrorBlock = styled.span`
	color: red;
	position: relative;
	bottom: ${props => (props.bottom ? "25px" : "0")};
`;

export const Input = styled(FormInput)`
	border-radius: 0 !important;
	&:focus,
	&:hover {
		outline: none !important;
		box-shadow: none !important;
		border-bottom: 1px solid #adadad !important;
	}
`;

export const Select = styled(FormSelect)`
	width: ${props => props.width || "100%"} !important;
	.ant-select-selection {
		border: none;
		border-bottom: 2px solid #adadad;
		border-radius: 0;
		&:hover,
		&:active,
		&:visited,
		&:focus {
			outline: none;
			box-shadow: none;
		}
		.ant-select-selection__rendered {
			&:hover,
			&:active,
			&:visited,
			&:focus {
				outline: none;
				box-shadow: none;
			}
		}
	}
`;
