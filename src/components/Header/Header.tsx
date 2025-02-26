import { useLocation } from "react-router-dom";
import * as S from "./Header.styled";
import {
	AddFilmLink,
	BurgerIcon,
	LanguageSelector,
	Logo,
	MobileLogo,
	PreviousSiteIcon,
} from "../../components";
import { useTranslation } from "react-i18next";
import MyListLink from "../MyListLink/MyListLink";
import { useState } from "react";

interface showButtonProps {
	onClick: () => void;
}

function Header() {
	const { t } = useTranslation();
	const location = useLocation();
	const ALLOWED_PATHS = ["/films", "/films/new", "/films/mylist"];
	const locationWithHeaderBackground = ["/films", "/films/mylist"];
	const isHomePage = location.pathname === "/";
	const [isOpen, setIsOpen] = useState(false);

	const closeMenu = () => setIsOpen(false);

	const showButton = ({ onClick }: showButtonProps) => {
		if (!isHomePage && !ALLOWED_PATHS.includes(location.pathname)) {
			return null;
		} else {
			return (
				<S.HeaderButton
					type="button"
					href={isHomePage ? "/login" : "/"}
					text={isHomePage ? t("Global.login") : t("Global.logout")}
					onClick={onClick}
				/>
			);
		}
	};

	return (
		<>
			<S.HeaderStyled
				isFilmPage={locationWithHeaderBackground.includes(location.pathname)}
			>
				<PreviousSiteIcon />
				<Logo />
				<BurgerIcon open={isOpen} onClick={() => setIsOpen(!isOpen)} />
				<S.Menu $open={isOpen}>
					<MobileLogo onClick={closeMenu} />
					<MyListLink onClick={closeMenu} />
					<AddFilmLink onClick={closeMenu} />
					<LanguageSelector onLanguageChange={closeMenu} />
					{showButton({ onClick: closeMenu })}
				</S.Menu>
			</S.HeaderStyled>
		</>
	);
}

export default Header;
