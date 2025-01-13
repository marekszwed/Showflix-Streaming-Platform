import styled from "styled-components";
import filmsBackground from "/films-background.jpg";
import { PageBackground } from "../../styles/mixins";

export const Films = styled.div`
	${PageBackground}
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: url(${filmsBackground});
	gap: 6.5em;
`;
