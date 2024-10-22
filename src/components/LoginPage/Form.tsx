// import { validEmail, validPassword } from '../../helpers/regex';
import Form from './FormLayout';
import { useState } from 'react';

function LoginForm() {
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');


	function handleSubmit() {
		
	}

	return (
		<Form
			onSubmit={(e) => {
				e.preventDefault();
			}}
		>
			<fieldset>
				<legend>Zaloguj się</legend>
				<div>
					<input
						type='text'
						placeholder='Email'
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</div>
				<div>
					<input
						type='password'
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<button type='submit'>Zaloguj się</button>
			</fieldset>
		</Form>
	);
}

export default LoginForm;
