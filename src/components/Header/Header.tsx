import { useLocation } from "react-router-dom";
import { HeaderStyled, LogoStyled, TitleStyled } from "./Header.Styled";
import Button from "../Button/Button";

function Header() {
	const location = useLocation();

	return (
		<>
			<HeaderStyled>
				<LogoStyled>
					<TitleStyled>showflix</TitleStyled>
				</LogoStyled>
				{location.pathname === "/" ? (
					<Button
						id="#"
						type="button"
						href="/login"
						text="Zaloguj się"
						width="10em"
						margin="0 10em 0 0"
					></Button>
				) : null}
			</HeaderStyled>
		</>
	);
}

export default Header;
