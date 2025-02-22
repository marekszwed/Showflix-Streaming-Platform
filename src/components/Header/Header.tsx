import { useLocation } from "react-router-dom";
import * as S from "./Header.styled";
import {
	AddFilmLink,
	BurgerIcon,
	LanguageSelector,
	Logo,
	MobileLogo,
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
				<Logo />
				<BurgerIcon open={isOpen} onClick={() => setIsOpen(!isOpen)} />
				<S.Menu $open={isOpen}>
					<MobileLogo onClick={() => setIsOpen(false)} />
					<MyListLink onClick={() => setIsOpen(false)} />
					<AddFilmLink onClick={() => setIsOpen(false)} />
					<LanguageSelector onClick={() => setIsOpen(false)} />
					{showButton({ onClick: () => setIsOpen(false) })}
				</S.Menu>
			</S.HeaderStyled>
		</>
	);
}

export default Header;
