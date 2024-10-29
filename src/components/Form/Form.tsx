import {
	Form,
	StyledDiv,
	StyledFieldset,
	StyledInput,
	StyledLegend,
} from "./Form.Styled.ts";
import { useState } from "react";
import NavLinkButton from "../Button/NavLinkButton.tsx";

function LoginForm() {
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");

	return (
		<Form
			onSubmit={(e) => {
				e.preventDefault();
			}}
		>
			<StyledFieldset>
				<StyledLegend>Zaloguj się</StyledLegend>
				<StyledDiv>
					<StyledInput
						type="text"
						placeholder="Email"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</StyledDiv>
				<StyledDiv>
					<StyledInput
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</StyledDiv>
				<NavLinkButton
					to="/main"
					text="Zaloguj się"
					width="100%"
					margin="auto"
				></NavLinkButton>
			</StyledFieldset>
		</Form>
	);
}

export default LoginForm;
