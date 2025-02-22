import { useLocation } from "react-router-dom";
import * as S from "./MobileLogo.styled";

interface MobileLogoProps {
	onClick: () => void;
}

function MobileLogo({ onClick }: MobileLogoProps) {
	const location = useLocation();
	const ALLOWED_PATHs = ["/", "/login"];
	const targetPath = ALLOWED_PATHs.includes(location.pathname) ? "/" : "/films";

	return (
		<S.StyledNavlink to={targetPath} onClick={onClick}>
			<S.LogoStyled>Showflix</S.LogoStyled>
		</S.StyledNavlink>
	);
}

export default MobileLogo;
