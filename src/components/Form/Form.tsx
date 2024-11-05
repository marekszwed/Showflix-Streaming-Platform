import {
	Form,
	StyledDiv,
	StyledFieldset,
	StyledInput,
	StyledLabel,
	StyledLegend,
} from "./Form.Styled.ts";
import { useState } from "react";
import NavLinkButton from "../Button/NavLinkButton.tsx";
import InputError from "./InputError.tsx";
import { useNavigate } from "react-router-dom";

function LoginForm() {
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [error, setError] = useState<{ email?: string; password?: string }>({});
	const navigate = useNavigate();

	const validateEmail = (email: string) => {
		const validEmail = new RegExp(
			"^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
		);
		return validEmail.test(email);
	};

	const validatePassword = (password: string) => {
		return password.length >= 6;
	};

	const handleSubmit = (e: React.FormEvent) => {
		console.log(e.target);
		e.preventDefault();
		const newError: { email?: string; password?: string } = {};

		if (!validateEmail(email)) {
			newError.email = "Email format is wrong";
		}
		if (!validatePassword(password)) {
			newError.password = "Password is to short. Min. 6 signs";
		}

		setError(newError);
		console.log(typeof newError);

		navigate("/filmlist");

		// if (Object.keys(newError).length === 0) {
		// 	navigate("/filmlist");
		// }
	};

	return (
		<Form id="form" onSubmit={handleSubmit}>
			<StyledFieldset>
				<StyledLegend>Zaloguj się</StyledLegend>
				<StyledDiv>
					<StyledLabel htmlFor="email">Email*</StyledLabel>
					<StyledInput
						id="email"
						type="text"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<InputError text={error.email || ""} error={!!error.email} />
				</StyledDiv>
				<StyledDiv>
					<StyledLabel htmlFor="password">Password*</StyledLabel>
					<StyledInput
						id="password"
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<InputError text={error.password || ""} error={!!error.password} />
				</StyledDiv>
				<NavLinkButton
					id="form"
					type="submit"
					to="#"
					text="Zaloguj się"
					width="100%"
					margin="auto"
				/>
			</StyledFieldset>
		</Form>
	);
}

export default LoginForm;
