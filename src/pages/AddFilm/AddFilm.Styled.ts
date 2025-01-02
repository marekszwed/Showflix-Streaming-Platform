import styled from "styled-components";
import { PageBackground } from "../../helpers/mixins";
import filmsBackground from "/films-background.jpg";

export const AddFilm = styled.div`
	${PageBackground}
	justify-content: space-around;
	align-items: center;
	background-image: url(${filmsBackground});
	height: 100svh;
	flex-wrap: wrap;
`;
