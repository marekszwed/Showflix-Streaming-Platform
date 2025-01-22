import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LogoStyled = styled.h1`
	display: flex;
	margin-left: 2em;
	font-size: ${({ theme }) => theme.fontSize.big};
	text-transform: uppercase;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.colors.white100};
`;

export const StyledNavlink = styled(NavLink)`
	text-decoration: none;
`;
