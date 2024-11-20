import styled from "styled-components";

export const FIlmsHeroImage = styled.img<{ src: string }>`
	background-position: center;
	background-size: cover;
	background-image: url(${(props) => props.src});
	width: 100vw;
	height: 100svh;
`;
