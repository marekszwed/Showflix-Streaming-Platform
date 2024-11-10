import styled from "styled-components";
import homeImage from "/home-image.jpg";

export const HomePageStyled = styled.div`
	position: relative;
	display: flex;
	background-image: url(${homeImage});
	background-position: center;
	background-size: cover;
	height: 100svh;
	width: 100vw;
`;
