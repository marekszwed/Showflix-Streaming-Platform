import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const Navlink = styled(NavLink)`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 3rem;
	font-size: ${({ theme }) => theme.fontSize.normal};
	font-weight: ${({ theme }) => theme.fontWeight.normal};
	color: ${({ theme }) => theme.colors.white100};
	text-decoration: none;

	&:hover {
		scale: 1.05;
	}

	@media ${device.mobileXL} {
		margin-right: 0;
	}
`;
