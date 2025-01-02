import styled from "styled-components";
import {
	CardButton,
	CardDescription,
	CardTextAnimation,
	CardTitle,
	Pointer,
} from "../../helpers/mixins";

export const MyFilmContainer = styled.div<{ $MyFilmImage?: string }>`
	position: relative;
	display: flex;
	align-self: start;
	width: 400px;
	height: 580px;
	margin: 0 0 3em 3em;
	background-position: center;
	background-size: cover;
	background-image: url(${({ $MyFilmImage }) => $MyFilmImage});
	border-radius: 10px;
	overflow: hidden;
`;

export const Button = styled.button`
	${CardButton}
	${Pointer}
`;

export const MyFilmTextContainer = styled.div<{ $isActive?: boolean }>`
	${CardTextAnimation}
	clip-path: ${({ $isActive }) =>
		$isActive ? "circle(120% at 50% 90%)" : "circle(0 at 50% 90%);"};
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
