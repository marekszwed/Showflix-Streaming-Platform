import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navlink = styled(NavLink)`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	right: 24em;
	top: 2.7em;
	font-size: ${({ theme }) => theme.fontSize.normal};
	font-weight: ${({ theme }) => theme.fontWeight.normal};
	color: ${({ theme }) => theme.colors.white100};
	text-decoration: none;
	transition: transform 0s ease-in-out;

	&:hover {
		transform: scale(1.05);
	}
`;
