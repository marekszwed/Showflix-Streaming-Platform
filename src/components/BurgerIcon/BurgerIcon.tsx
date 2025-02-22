import * as S from "./BurgerIcon.styled";

interface BurgerProps {
	open: boolean;
	onClick: () => void;
}

function BurgerIcon({ open, onClick }: BurgerProps) {
	return (
		<S.BurgerIconContainer $open={open} onClick={onClick}>
			<div></div>
			<div></div>
			<div></div>
		</S.BurgerIconContainer>
	);
}

export default BurgerIcon;
