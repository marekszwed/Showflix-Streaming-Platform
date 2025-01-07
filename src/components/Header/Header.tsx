import { useLocation } from "react-router-dom";
import { HeaderStyled, LogoStyled, TitleStyled } from "./Header.Styled";
import Button from "../Button/Button";

function Header() {
	const location = useLocation();
	const ALLOWED_PATHS = ["/films", "/films/new"];

	const showButton = () => {
		if (location.pathname === "/") {
			return (
				<Button
					id="#"
					type="button"
					href="/login"
					text="Zaloguj się"
					width="10em"
					margin="0 10em 0 0"
				></Button>
			);
		} else if (ALLOWED_PATHS.includes(location.pathname)) {
			return (
				<Button
					id="#"
					type="button"
					href="/"
					text="Wyloguj się"
					width="10em"
					margin="0 10em 0 0"
				></Button>
			);
		} else {
			return null;
		}
	};

	return (
		<>
			<HeaderStyled isFilmPage={location.pathname === "/films"}>
				<LogoStyled>
					<TitleStyled>showflix</TitleStyled>
				</LogoStyled>
				{showButton()}
			</HeaderStyled>
		</>
	);
}

export default Header;
