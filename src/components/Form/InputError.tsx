import { StyledError } from "./Form.Styled";

interface ErrorProps {
	text: string;
	error: boolean;
}

function InputError({ text, error }: ErrorProps): JSX.Element {
	return <StyledError error={error}>{text}</StyledError>;
}

export default InputError;
