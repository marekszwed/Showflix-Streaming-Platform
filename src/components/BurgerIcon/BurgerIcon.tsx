import { useLocation } from "react-router-dom";
import * as S from "./BurgerIcon.styled";
import { NOT_ALLOWED_PATHS } from "../../constants/constants";

interface BurgerProps {
	open: boolean;
	onClick: () => void;
}

function BurgerIcon({ open, onClick }: BurgerProps) {
	const location = useLocation();

	if (!NOT_ALLOWED_PATHS.includes(location.pathname)) {
		return (
			<S.BurgerIconContainer $open={open} onClick={onClick}>
				<div className="line" />
				<div className="line" />
				<div className="line" />
			</S.BurgerIconContainer>
		);
	}
}

export default BurgerIcon;
