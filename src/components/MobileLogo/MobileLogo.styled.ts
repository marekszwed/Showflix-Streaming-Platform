import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const LogoStyled = styled.h1`
	position: absolute;
	display: none;
	top: 15%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: ${({ theme }) => theme.fontSize.bigger};
	text-transform: uppercase;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.colors.white100};

	@media ${device.mobileXL} {
		display: flex;
	}
`;

export const StyledNavlink = styled(NavLink)`
	text-decoration: none;
`;
