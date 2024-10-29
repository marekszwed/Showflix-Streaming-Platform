import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLinkButton = styled(NavLink)<{width?: string, margin?: string}>`
	display: flex;
	justify-content: center;
	font-size: 1.6rem;
	width: ${(props) => props.width || "auto"};
	margin: ${(props) => props.margin || "auto"};
	border: none;
	border-radius: 10px;
	padding: 0.7em;
	color: #fff;
	background-color: ${(props) => props.color || props.theme.colors.PrimaryRedColor};
	cursor: pointer;

	&:hover,
	&:focus {
		background-color: ${(props) => props.theme.colors.btnHoverColor};
	}
`;

