import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const StyledNavlink = styled(NavLink)`
	position: relative;
	display: none;
	align-items: center;
	text-decoration: none;

	@media ${device.laptop} {
		display: flex;
	}
`;

export const PreviousSiteIcon = styled(FontAwesomeIcon)`
	display: flex;
	padding: 2rem;
	font-size: ${({ theme }) => theme.fontSize.bigger};
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.white100};
`;
