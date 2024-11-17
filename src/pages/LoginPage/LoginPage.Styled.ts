import styled from "styled-components";
import loginImage from "/login-background.jpg";
import { PageBackground } from "../../helpers/mixins";

export const LoginPageStyled = styled.div`
	${PageBackground}
	justify-content: center;
	align-items: center;
	background-image: url(${loginImage});
`;
