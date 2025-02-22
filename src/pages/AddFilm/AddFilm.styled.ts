import styled from "styled-components";
import { PageBackground, Pointer } from "../../styles/mixins";
import { Button } from "../../components";
import { device } from "../../styles/breakpoints";

export const AddFilm = styled.div`
	${PageBackground}
	justify-content: center;
	align-items: center;
	background-image: linear-gradient(135deg, #700b10 0%, #0d0603 34%);
	height: 100svh;
	gap: 3rem;
	padding: 2rem;
	overflow: hidden;

	@media ${device.tablet} {
		flex-direction: column-reverse;
		gap: 2rem;
		height: auto;
		padding: 0;
	}
`;

export const PrototypeContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media ${device.laptopCustom} {
		margin-left: 1rem;
	}

	@media ${device.tablet} {
		margin: 10rem 0 3rem 0;
	}
`;

export const PrototypeImageContainer = styled.div`
	width: 28rem;
	height: 40rem;
	border: 1px solid ${({ theme }) => theme.colors.grey};
	border-radius: 1rem;
	margin-bottom: 6rem;
	overflow: hidden;
`;

export const FilmInformationContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: space-around;
	align-items: flex-start;
	border: 1px solid ${({ theme }) => theme.colors.grey};
	background-color: ${({ theme }) => theme.colors.dark100};
	border-radius: 1rem;
	gap: 4rem;

	@media ${device.laptopCustom} {
		margin-right: 1rem;
	}

	@media ${device.tablet} {
		flex-direction: column;
		align-items: center;
		top: 9rem;
		gap: 1.5rem;
		width: 90vw;
	}
`;

export const ButtonContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 2rem;
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
	padding: 1.12rem;
	background-color: transparent;
	color: ${({ theme }) => theme.colors.red};
	${Pointer}
`;

export const AddToListButton = styled(Button)`
	width: 100%;
`;
