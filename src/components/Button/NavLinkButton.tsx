import { StyledNavLinkButton } from "./NavLinkButton.Styled";

interface Props {
	id: string;
	type: string;
	text: string;
	width?: string;
	margin?: string;
	to: string;
}

function NavLinkButton({
	id,
	type,
	text,
	width,
	margin,
	to,
}: Props): JSX.Element {
	return (
		<StyledNavLinkButton
			id={id}
			type={type}
			to={to}
			width={width}
			margin={margin}
		>
			{text}
		</StyledNavLinkButton>
	);
}

export default NavLinkButton;
