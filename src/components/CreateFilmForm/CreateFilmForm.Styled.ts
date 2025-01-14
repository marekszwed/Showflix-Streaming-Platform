import styled from "styled-components";
import { Container, InputMixin, LabelMixin } from "../../styles/mixins";
 
export const Form = styled.form`
	display: flex;
	flex-direction: column;
	margin-left: 9em;
`;
export const Fieldset = styled.fieldset`
	position: relative;
	border: transparent;
`;
export const BasicInformation = styled.div`
	height: auto;
`;
export const InputContainer = styled.div`
	${Container}

	width: 28em;
`;
export const Label = styled.label`
	${LabelMixin}
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Input = styled.input`
	${InputMixin}
	padding: 0.5em 0 0.5em 1em;

	&[type="file"] {
		color: transparent;
	}
`;
