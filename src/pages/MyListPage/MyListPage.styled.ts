import styled from "styled-components";
import { PageBackground } from "../../styles/mixins";

export const MyFilmList = styled.div`
	${PageBackground}
	display: flex;
	flex-direction: column;
	background-image: linear-gradient(135deg, #700b10 0%, #0d0603 34%);
	min-height: 100vh;
`;
