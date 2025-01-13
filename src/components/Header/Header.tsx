import { useLocation } from "react-router-dom";
import { HeaderStyled, LogoStyled, TitleStyled } from "./Header.styled";
import { Button } from "../../components";

function Header() {
	const location = useLocation();
	const ALLOWED_PATHS = ["/films", "/films/new"];
	const isHomePage = location.pathname === "/";

	const showButton = () => {
		if (!isHomePage && !ALLOWED_PATHS.includes(location.pathname)) {
			return null;
		} else {
			return (
				<Button
					type="button"
					href={location.pathname === "/" ? "/login" : "/"}
					text={location.pathname === "/" ? "Zaloguj się" : "Wyloguj się"}
					width="10em"
					margin="1em 6.5em 0 0"
				/>
			);
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
