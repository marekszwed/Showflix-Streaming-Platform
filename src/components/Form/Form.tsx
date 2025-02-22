import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Form.styled.ts";
import { InputError } from "../../components";
import { useTranslation } from "react-i18next";

function LoginForm() {
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [error, setError] = useState<{ email?: string; password?: string }>({});
	const navigate = useNavigate();
	const { t } = useTranslation();

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
		e.preventDefault();
		const newError: { email?: string; password?: string } = {};

		if (!validateEmail(email)) {
			newError.email = "Email format is wrong";
		}
		if (!validatePassword(password)) {
			newError.password = "Password is to short. Min. 6 signs";
		}

		setError(newError);

		if (Object.keys(newError).length === 0) {
			navigate("/films");
		}
	};

	return (
		<S.Form id="form" onSubmit={handleSubmit}>
			<S.StyledFieldset>
				<S.StyledLegend>{t("Global.login")}</S.StyledLegend>
				<S.StyledDiv>
					<S.StyledLabel htmlFor="email">Email*</S.StyledLabel>
					<S.StyledInput
						id="email"
						type="text"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<InputError text={error.email} error={!!error.email} />
				</S.StyledDiv>
				<S.StyledDiv>
					<S.StyledLabel htmlFor="password">Password*</S.StyledLabel>
					<S.StyledInput
						id="password"
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<InputError text={error.password} error={!!error.password} />
				</S.StyledDiv>
				<S.FormButton type="submit" text={t("Global.login")} />
			</S.StyledFieldset>
		</S.Form>
	);
}

export default LoginForm;
