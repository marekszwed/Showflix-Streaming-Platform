import { useLocation } from "react-router-dom";
import { HeaderStyled } from "./Header.styled";
import { Button, LanguageSelector, Logo } from "../../components";
import { useTranslation } from "react-i18next";

function Header() {
	const { t } = useTranslation();
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
					text={location.pathname === "/" ? t("login") : t("logout")}
					width="10em"
					margin="1.6em 6.5em 1.6em 0"
				/>
			);
		}
	};

	return (
		<>
			<HeaderStyled isFilmPage={location.pathname === "/films"}>
				<Logo />
				<LanguageSelector/>
				{showButton()}
			</HeaderStyled>
		</>
	);
}

export default Header;
