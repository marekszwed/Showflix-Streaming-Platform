import styled from "styled-components";
import { PageBackground } from "../../styles/mixins";

export const FilmsHeroContainer = styled.div`
	${PageBackground}
	flex-direction: column;
	height: 100svh;

	&::after {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		/* background-color: ${({ theme }) => theme.colors.dark100}; */
		background-image: linear-gradient(
			0deg,
			rgba(0, 0, 0, 0.78) 20%,
			rgba(255, 255, 255, 0) 93%
		);
		z-index: ${({ theme }) => theme.zindex.positive};
	}
`;

export const FilmsHeroImage = styled.img<{ src: string }>`
	background-position: center;
	background-size: cover;
	background-image: url(${({ src }) => src});
	object-fit: cover;
	width: 100%;
	height: 100%;
	z-index: ${({ theme }) => theme.zindex.neutral};
`;

export const HeroInfoContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-self: flex-start;
	max-width: 55em;
	bottom: 35em;
	left: 10em;
	z-index: ${({ theme }) => theme.zindex.positivePlus};
`;

export const Title = styled.h1`
	display: flex;
	font-size: ${({ theme }) => theme.fontSize.big};
	color: ${({ theme }) => theme.colors.yellow};
	text-transform: uppercase;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	z-index: ${({ theme }) => theme.zindex.positiveMax};
`;

export const Description = styled.p`
	display: flex;
	font-size: ${({ theme }) => theme.fontSize.normal};
	color: ${({ theme }) => theme.colors.white100};
	line-height: 1.6em;
`;
