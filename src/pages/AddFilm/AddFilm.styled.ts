import styled from "styled-components";
import { PageBackground } from "../../styles/mixins";
 
export const AddFilm = styled.div`
	${PageBackground}
	justify-content: center;
	align-items: center;
	background-image: linear-gradient(135deg, #700b10 0%, #0d0603 34%);
	height: 100svh;

`;

export const ButtonContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	height: 100svh;
	margin: 0 10em 0 0;

	& button {
		width: 10em;
	}
`;

export const FilmInformationContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	border: 1px solid ${({ theme }) => theme.colors.grey};
	background-color: ${({ theme }) => theme.colors.dark100};
	gap: 10em;
`;
