import styled from 'styled-components';
import PortalNavigation from './PortalNavigation';
import { useState } from 'react';

const LoginPage = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100svh;
	width: 100%;
`;

const Form = styled.form`
	position: relative;
	display: flex;
`;

function PortalModal() {
	const [showModal, setShowModal] = useState(true);
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');

	function handleClose() {
		console.log(showModal);
		setShowModal(false);
	}

	return (
		<LoginPage>
			<PortalNavigation />
			<Form
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<h1>Zaloguj się</h1>
				<input
					type='text'
					value={name}
					placeholder='Email lub numer telefonu komórkow...'
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type='password'
					value={password}
					placeholder='Hasło'
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button onClick={handleClose}>Zaloguj się</button>
			</Form>
		</LoginPage>
	);
}

export default PortalModal;
