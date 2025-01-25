import styled from "styled-components";
import { PageBackground, Pointer } from "../../styles/mixins";

export const AddFilm = styled.div`
	${PageBackground}
	justify-content: center;
	align-items: center;
	background-image: linear-gradient(135deg, #700b10 0%, #0d0603 34%);
	height: 100svh;
	gap: 3em;
`;

export const PrototypeContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const PrototypeImageContainer = styled.div`
	width: 280px;
	height: 400px;
	border: 1px solid ${({ theme }) => theme.colors.grey};
	border-radius: 10px;
	margin-bottom: 6em;
	overflow: hidden;
`;

export const FilmInformationContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: space-around;
	align-items: flex-start;
	border: 1px solid ${({ theme }) => theme.colors.grey};
	background-color: ${({ theme }) => theme.colors.dark100};
	border-radius: 10px;
	gap: 8em;
`;

export const ButtonContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 2em;
`;

export const EraseButton = styled.button`
	display: flex;
	justify-content: center;
	font-size: 1.6rem;
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
	text-decoration: none;
	width: 100%;
	margin: auto;
	border: none;
	border-radius: 10px;
	padding: 0.7em;
	background-color: transparent;
	color: ${({ theme }) => theme.colors.red};
	${Pointer}
`;
