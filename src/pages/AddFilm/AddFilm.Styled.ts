import styled from "styled-components";
import { PageBackground } from "../../styles/mixins";
import filmsBackground from "/films-background.jpg";

export const AddFilm = styled.div`
	${PageBackground}
	justify-content: space-around;
	align-items: center;
	background-image: url(${filmsBackground});
	height: 100svh;
	flex-wrap: wrap;
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
