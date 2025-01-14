import { NavLink } from "react-router-dom";
import { StyledButton } from "./Button.styled";
 
interface Props {
	id?: string;
	type?: "submit" | "button" | "reset";
	text: string;
	width?: string;
	margin?: string;
	href?: string;
	onClick?: () => void;
}

function Button({ id, href, type, text, width, margin }: Props) {
	if (href) {
		return (
			<NavLink id={id} to={href}>
				<StyledButton $width={width} $margin={margin}>
					{text}
				</StyledButton>
			</NavLink>
		);
	} else {
		return (
			<StyledButton id="" type={type} $width={width} $margin={margin}>
				{text}
			</StyledButton>
		);
	}
}

export default Button;
