import styled from "styled-components";
import {
	CardButton,
	CardDescription,
	CardTextAnimation,
	CardTitle,
} from "../../styles/mixins";
 
export const MyFilmContainer = styled.div<{ $myFilmImage?: string }>`
	position: relative;
	display: flex;
	align-self: start;
	width: 400px;
	height: 580px;
	margin: 0 0 3em 3em;
	background-position: center;
	background-size: cover;
	background-image: url(${({ $myFilmImage }) => $myFilmImage});
	border-radius: 10px;
	overflow: hidden;
`;

export const Button = styled.button`
	${CardButton}
`;

export const MyFilmTextContainer = styled.div<{ $isAnimate?: boolean }>`
	${CardTextAnimation}
	clip-path: ${({ $isAnimate }) =>
		$isAnimate ? "circle(120% at 50% 90%)" : "circle(0 at 50% 90%);"};
`;

export const Title = styled.h3`
	${CardTitle}
`;

export const Year = styled.p`
	margin-top: 1em;
	font-size: ${({ theme }) => theme.fontSize.normal};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.colors.yellow};
`;

export const Description = styled.p`
	${CardDescription}
`;
