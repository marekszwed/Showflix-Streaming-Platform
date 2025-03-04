import { useLocation } from "react-router-dom";
import * as S from "./MobileLogo.styled";

function MobileLogo() {
	const location = useLocation();
	const ALLOWED_PATHS_TO_SHOW = ["/", "/films"];

	if (ALLOWED_PATHS_TO_SHOW.includes(location.pathname)) {
		return <S.LogoStyled>Showflix</S.LogoStyled>;
	}
}

export default MobileLogo;
