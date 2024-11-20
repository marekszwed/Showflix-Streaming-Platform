import styled from "styled-components";
import loginImage from "/login-background.jpg";
import { PageBackground } from "../../helpers/mixins";

export const LoginPageStyled = styled.div`
	${PageBackground}
	height: 100svh;
	justify-content: center;
	align-items: center;
	background-image: url(${loginImage});
`;
