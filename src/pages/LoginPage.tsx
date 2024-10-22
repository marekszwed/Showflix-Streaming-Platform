// import styled from 'styled-components';
// import { useState } from 'react';
import LoginForm from '../components/LoginPage/Form';
import { LogPage } from './LoginPageLayout';
import PageHeader from '../components/PageHeader';

function LoginPage() {
	// const [showModal, setShowModal] = useState(true);

	// function handleClose() {
	// 	console.log(showModal);
	// 	setShowModal(false);
	// }

	return (
		<LogPage>
			<PageHeader />
			<LoginForm />
		</LogPage>
	);
}

export default LoginPage;
