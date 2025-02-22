import { StyledButton, StyledNavlink } from "./Button.styled";

interface Props {
	type?: "submit" | "button" | "reset";
	text: string;
	href?: string;
	onClick?: () => void;
	className?: string;
}

function Button({ href, type, text, className, onClick }: Props) {
	const buttonProps = { onClick, className };

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
