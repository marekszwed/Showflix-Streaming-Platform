import { useLocation } from "react-router-dom";
import { HeaderStyled, LogoStyled, TitleStyled } from "./Header.Styled";
import NavLinkButton from "../Button/NavLinkButton";

function Header() {
	const location = useLocation();

	return (
		<>
			<HeaderStyled>
				<LogoStyled>
					<TitleStyled>showflix</TitleStyled>
				</LogoStyled>
				{location.pathname === "/" ? (
					<NavLinkButton
						id="#"
						type="button"
						to="/login"
						text="Zaloguj się"
						width="10em"
						margin="0 10em 0 0"
					/>
				) : null}
			</HeaderStyled>
		</>
	);
}

export default Header;
