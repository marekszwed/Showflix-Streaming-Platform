import styled from "styled-components";
import homeImage from "/home-image.jpg";
import { PageBackground } from "../../helpers/mixins";

export const HomePageStyled = styled.div`
	${PageBackground}
	justify-content: center;
	align-items: center;
	background-image: url(${homeImage});
`;


