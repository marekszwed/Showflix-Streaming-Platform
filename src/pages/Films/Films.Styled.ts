import styled from "styled-components";
import filmsBackground from "/films-background.jpg";
import { PageBackground } from "../../helpers/mixins";

export const FilmsStyled = styled.div`
	${PageBackground}
	background-image: url(${filmsBackground});
`;
