import { useLocation } from "react-router-dom";
import { HeaderStyled } from "./Header.styled";
import { AddFilmLink, Button, LanguageSelector, Logo } from "../../components";
import { useTranslation } from "react-i18next";
import MyListLink from "../MyListLink/MyListLink";

function Header() {
	const { t } = useTranslation();
	const location = useLocation();
	const ALLOWED_PATHS = ["/films", "/films/new", "/films/mylist"];
	const locationWithHeaderBackground = ["/films", "/films/mylist"];
	const isHomePage = location.pathname === "/";

	const showButton = () => {
		if (!isHomePage && !ALLOWED_PATHS.includes(location.pathname)) {
			return null;
		} else {
			return (
				<Button
					type="button"
					href={isHomePage ? "/login" : "/"}
					text={isHomePage ? t("Global.login") : t("Global.logout")}
					width="10em"
					margin="1.6em 6.5em 1.6em 0"
				/>
			);
		}
	};

	return (
		<>
			<HeaderStyled
				isFilmPage={locationWithHeaderBackground.includes(location.pathname)}
			>
				<Logo />
				<MyListLink />
				<AddFilmLink />
				<LanguageSelector />
				{showButton()}
			</HeaderStyled>
		</>
	);
}

export default Header;
