import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const LogoStyled = styled.h1`
	display: none;
	margin: 1.7rem 0 0 2rem;
	font-size: ${({ theme }) => theme.fontSize.normal};
	text-transform: uppercase;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.colors.white100};

	@media ${device.tablet} {
		display: flex;
	}
`;
