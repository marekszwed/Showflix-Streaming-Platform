import styled from "styled-components";
import { Pointer } from "../../styles/mixins";

export const FavoriteCardContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 18rem;
	gap: 0.5rem;
`;

export const Card = styled.div<{ $poster?: string }>`
	position: relative;
	display: flex;
	width: 100%;
	height: 25rem;
	background-position: center;
	background-size: cover;
	background-image: url(${({ $poster }) => $poster});
	border-radius: 1rem;
	transition: transform 0.3s ease, box-shadow 0.3s ease;
	overflow: hidden;
	${Pointer}

	&:hover {
		transform: scale(1.05);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
	}
`;

export const Title = styled.p`
	position: relative;
	display: flex;
	justify-content: center;
	width: 100%;
	margin-top: 0.7rem;
	text-align: center;
	font-size: ${({ theme }) => theme.fontSize.normal};
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
	color: ${({ theme }) => theme.colors.yellow};
	line-height: 2rem;
`;
