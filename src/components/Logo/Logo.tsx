import { NavLink, useLocation } from "react-router-dom";
import { LogoStyled } from "./Logo.styled";

function Logo() {
	const location = useLocation();
	const homePage = location.pathname === "/";
	const loginPage = location.pathname === "/login";
	const filmPage = "/films";

	if (!homePage && !loginPage) {
		return (
			<NavLink to={filmPage} style={{ textDecoration: "none" }}>
				<LogoStyled>Showflix</LogoStyled>
			</NavLink>
		);
	} else {
		return <LogoStyled>Showflix</LogoStyled>;
	}
}

export default Logo;
