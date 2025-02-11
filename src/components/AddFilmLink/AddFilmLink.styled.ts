import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navlink = styled(NavLink)`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 12rem;
	font-size: ${({ theme }) => theme.fontSize.normal};
	font-weight: ${({ theme }) => theme.fontWeight.normal};
	color: ${({ theme }) => theme.colors.white100};
	text-decoration: none;

	&:hover {
		scale: 1.05;
	}
`;
