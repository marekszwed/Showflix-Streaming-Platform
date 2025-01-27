import styled from "styled-components";
import {
	CardButton,
	CardDescription,
	CardTextAnimation,
	CardTitle,
	Pointer,
} from "../../styles/mixins";

export const Card = styled.div<{ $filmImage?: string }>`
	position: relative;
	display: flex;
	width: 280px;
	height: 400px;
	background-position: center;
	background-size: cover;
	background-image: url(${({ $filmImage }) => $filmImage});
	border-radius: 10px;
	transition: transform 0.3s ease, box-shadow 0.3s ease;
	overflow: hidden;
	${Pointer}

	&:hover {
		transform: scale(1.05);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
	}
`;

export const Button = styled.button`
	${CardButton}
	${Pointer}
`;

export const Text = styled.div<{ $isActive?: boolean }>`
	${CardTextAnimation}
	clip-path: circle(${({ $isActive }) =>
		$isActive ? "120%" : "0"} at 50% 90%);
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
