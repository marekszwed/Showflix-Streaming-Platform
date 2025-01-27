import { StyledButton, StyledNavlink } from "./Button.styled";

interface Props {
	type?: "submit" | "button" | "reset";
	text: string;
	width?: string;
	margin?: string;
	href?: string;
	onClick?: () => void;
}

function Button({ href, type, text, width, margin, onClick }: Props) {
	const buttonProps = { $width: width, $margin: margin, onClick };

	if (href) {
		return (
			<StyledNavlink to={href}>
				<StyledButton {...buttonProps}>{text}</StyledButton>
			</StyledNavlink>
		);
	} else {
		return (
			<StyledButton type={type} {...buttonProps}>
				{text}
			</StyledButton>
		);
	}
}

export default Button;
