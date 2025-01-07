import styled from "styled-components";
import {
	CardButton,
	CardDescription,
	CardTextAnimation,
	CardTitle,
	Pointer,
} from "../../helpers/mixins";

export const Card = styled.div<{ $filmImage?: string }>`
	position: relative;
	display: flex;
	max-width: 280px;
	height: 400px;
	background-position: center;
	background-size: cover;
	background-image: url(${({ $filmImage }) => $filmImage});
	border-radius: 10px;
	overflow: hidden;
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

export const Description = styled.p`
	${CardDescription}
`;
