// import styled from 'styled-components';
// import { useState } from 'react';
import LoginForm from '../../components/Form/Form';
import { LoginPageStyled } from './LoginPage.Styled';
import Header from '../../components/Header/Header';

function LoginPage() {
	// const [showModal, setShowModal] = useState(true);

	// function handleClose() {
	// 	console.log(showModal);
	// 	setShowModal(false);
	// }

	return (
		<LoginPageStyled>
			<Header />
			<LoginForm />
		</LoginPageStyled>
	);
}

export default LoginPage;
