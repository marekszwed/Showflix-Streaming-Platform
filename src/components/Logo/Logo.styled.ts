import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const LogoStyled = styled.h1`
	display: flex;
	margin-left: 8rem;
	font-size: ${({ theme }) => theme.fontSize.big};
	text-transform: uppercase;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.colors.white100};

	@media ${device.laptop} {
		margin-left: 3rem;
	}
	@media ${device.tablet} {
		display: none;
	}
`;

export const StyledNavlink = styled(NavLink)`
	text-decoration: none;
`;
