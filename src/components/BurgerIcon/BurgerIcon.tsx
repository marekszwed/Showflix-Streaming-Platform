import * as S from "./BurgerIcon.styled";

interface BurgerProps {
	open: boolean;
	onClick: () => void;
}

function BurgerIcon({ open, onClick }: BurgerProps) {
	return (
		<S.BurgerIconContainer $open={open} onClick={onClick}>
			<S.Line $open={open} />
			<S.Line $open={open} />
			<S.Line $open={open} />
		</S.BurgerIconContainer>
	);
}

export default BurgerIcon;
