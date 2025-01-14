import styled from "styled-components";
import homeImage from "/home-image.jpg";
import { PageBackground } from "../../styles/mixins";
 
export const HomePageStyled = styled.div`
	${PageBackground}
	height: 100svh;
	justify-content: center;
	align-items: center;
	background-image: url(${homeImage});
`;
