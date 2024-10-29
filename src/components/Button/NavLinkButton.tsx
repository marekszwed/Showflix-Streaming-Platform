import { Props } from "../../helpers/types";
import { StyledNavLinkButton } from "./NavLinkButton.Styled";
// import { StyledButton } from './Button.Styled';

function NavLinkButton({ text, width, margin, to }: Props): JSX.Element {
	return (
		<StyledNavLinkButton type="submit" to={to} width={width} margin={margin}>
			{text}
		</StyledNavLinkButton>
	);
}

export default NavLinkButton;
