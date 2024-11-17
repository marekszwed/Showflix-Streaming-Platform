import styled from "styled-components";
import filmsBackground from "/films-background.jpg";
import { PageBackground } from "../../helpers/mixins";

export const FilmsStyled = styled.div`
	${PageBackground}
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: url(${filmsBackground});
	gap: 3em;
`;
