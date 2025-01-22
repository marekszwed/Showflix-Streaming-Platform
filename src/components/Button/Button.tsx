import { StyledButton, StyledNavlink } from "./Button.styled";

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
			<StyledNavlink id={id} to={href}>
				<StyledButton $width={width} $margin={margin}>
					{text}
				</StyledButton>
			</StyledNavlink>
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
