// import { useState } from 'react';
import LoginForm from '../../components/Form/Form';
import { LoginPageStyled } from './LoginPage.Styled';

function LoginPage() {
	// const [showModal, setShowModal] = useState(true);

	// function handleClose() {
	// 	console.log(showModal);
	// 	setShowModal(false);
	// }

	return (
		<LoginPageStyled>
			
			<LoginForm />
		</LoginPageStyled>
	);
}

export default LoginPage;
