import styled from "styled-components";
// import showflixLogo from "/Showflix-logo.svg";
import { PageBackground } from "../../styles/mixins";
import { device } from "../../styles/breakpoints";

export const HomePageStyled = styled.div`
	${PageBackground}
	height: 100svh;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: linear-gradient(135deg, #700b10 0%, #0d0603 34%);
`;

export const HomePageLogo = styled.img`
	display: flex;
	height: 30rem;
	width: 30rem;

	@media ${device.tablet} {
		height: 20rem;
		width: 20rem;
	}
`;

export const PageTitle = styled.h2`
	display: flex;
	margin: 2rem 0 1rem 0;
	font-size: ${({ theme }) => theme.fontSize.pageLogo};
	color: ${({ theme }) => theme.colors.white100};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	text-transform: uppercase;

	@media ${device.tablet} {
		font-size: ${({ theme }) => theme.fontSize.pageLogoTablet};
		margin-inline: 1rem;
	}

	@media ${device.mobile} {
		font-size: ${({ theme }) => theme.fontSize.pageLogoMobile};
		margin-inline: 1rem;
	}
`;

export const PageDescription = styled.h3`
	display: flex;
	margin: 0;
	font-size: ${({ theme }) => theme.fontSize.bigger};
	color: ${({ theme }) => theme.colors.white100};
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
	text-transform: uppercase;
	letter-spacing: 0.7rem;

	@media ${device.tablet} {
		font-size: ${({ theme }) => theme.fontSize.belowBigger};
	}

	@media ${device.mobile} {
		font-size: ${({ theme }) => theme.fontSize.belowBigger};
		letter-spacing: 0.1rem;
	}
`;
