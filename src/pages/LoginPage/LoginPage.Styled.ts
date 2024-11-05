import styled from "styled-components";
import loginImage from "/login-background.jpg";

export const LoginPageStyled = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url(${loginImage});
	background-position: center;
	background-size: cover;	
	height: 100svh;
	width: 100vw;
`;
