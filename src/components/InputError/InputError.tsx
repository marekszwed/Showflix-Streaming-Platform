import { StyledError } from "./InputError.styled";
 
interface ErrorProps {
	text?: string;
	error?: boolean;
}

function InputError({ text, error }: ErrorProps): JSX.Element {
	return <StyledError $error={error}>{text}</StyledError>;
}

export default InputError;
