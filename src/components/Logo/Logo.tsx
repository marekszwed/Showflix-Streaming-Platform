import { useLocation } from "react-router-dom";
import { LogoStyled, StyledNavlink } from "./Logo.styled";

function Logo() {
	const location = useLocation();
	const homePage = location.pathname === "/";
	const loginPage = location.pathname === "/login";

	if (!homePage && !loginPage) {
		return (
			<StyledNavlink to="/films">
				<LogoStyled>Showflix</LogoStyled>
			</StyledNavlink>
		);
	}
	return <LogoStyled>Showflix</LogoStyled>;
}

export default Logo;
