import styled from "styled-components";
import { PageBackground } from "../../styles/mixins";
import { device } from "../../styles/breakpoints";

export const FilmsHeroContainer = styled.div`
	${PageBackground}
	flex-direction: column;
	height: 100svh;
	width: 100vw;
	overflow: hidden;

	&::after {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(
			0deg,
			rgba(0, 0, 0, 0.78) 20%,
			rgba(255, 255, 255, 0) 93%
		);
		z-index: ${({ theme }) => theme.zindex.positive};
	}
`;

export const FilmsHeroImage = styled.img<{ src: string }>`
	position: absolute;
	top: 0;
	left: 0;
	background-image: url(${({ src }) => src});
	object-fit: cover;
	width: 100%;
	height: 100%;
	z-index: ${({ theme }) => theme.zindex.neutral};
`;

export const HeroInfoContainer = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	align-self: flex-start;
	max-width: 55rem;
	width: 100%;
	bottom: 15rem;
	left: 10rem;
	z-index: ${({ theme }) => theme.zindex.positivePlus};

	@media ${device.laptop} {
		left: 3rem;
	}

	@media ${device.mobileXL} {
		max-width: 40rem;
	}

	@media ${device.mobileL} {
		bottom: 2rem;
		left: 1.5rem;
		max-width: 30rem;
	}
`;

export const Title = styled.h1`
	display: flex;
	font-size: ${({ theme }) => theme.fontSize.big};
	color: ${({ theme }) => theme.colors.yellow};
	text-transform: uppercase;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	z-index: ${({ theme }) => theme.zindex.positiveMax};

	@media ${device.mobileL} {
		font-size: ${({ theme }) => theme.fontSize.bigger};
	}
`;

export const Description = styled.p`
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 5;
	font-size: ${({ theme }) => theme.fontSize.normal};
	color: ${({ theme }) => theme.colors.white100};
	line-height: 2.56rem;
	overflow: hidden;
`;
