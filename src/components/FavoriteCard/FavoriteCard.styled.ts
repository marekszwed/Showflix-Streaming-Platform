import styled from "styled-components";
import { Pointer } from "../../styles/mixins";

export const Card = styled.div<{ $poster?: string }>`
	position: relative;
	display: flex;
	max-width: 18rem;
	width: 100%;
	height: 25rem;
	background-position: center;
	background-size: cover;
	background-image: url(${({ $poster }) => $poster});
	border-radius: 10px;
	transition: transform 0.3s ease, box-shadow 0.3s ease;
	overflow: hidden;
	${Pointer}

	&:hover {
		transform: scale(1.05);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
	}
`;
