import { useLocation } from "react-router-dom";
import { HeaderStyled, LogoStyled, TitleStyled } from "./Header.Styled";
import NavLinkButton from "../Button/NavLinkButton";

function Header() {
	const location = useLocation();

	function renderHeaderButtonL() {
		if (location.pathname === "/Home") {
			return (
				<NavLinkButton
					to="/login"
					text="Zaloguj się"
					width="10em"
					margin="0 10em 0 0"
				></NavLinkButton>
			);
		} else if (location.pathname === "/login") {
			return null;
		}
	}

	return (
		<>
			<HeaderStyled>
				<LogoStyled>
					<TitleStyled>showflix</TitleStyled>
				</LogoStyled>
				{renderHeaderButtonL()}
			</HeaderStyled>
		</>
	);
}

export default Header;
