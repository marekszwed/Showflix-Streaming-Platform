import styled from "styled-components";
import { PageBackground } from "../../styles/mixins";
 
export const AddFilm = styled.div`
	${PageBackground}
	justify-content: space-around;
	align-items: center;
	background-image: linear-gradient(135deg, #700b10 0%, #0d0603 34%);
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
