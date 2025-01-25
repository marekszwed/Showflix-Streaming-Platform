import styled from "styled-components";
import { PageBackground } from "../../styles/mixins";
import { Card } from "../../components";

export const Films = styled.div`
	${PageBackground}
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: linear-gradient(135deg, #700b10 0%, #0d0603 34%);
	padding-bottom: 5em;
`;

export const MyNewFilmCard = styled(Card)`
	position: relative;
	display: flex;
	align-self: start;
`;
