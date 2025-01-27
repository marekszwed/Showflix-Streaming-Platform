import styled from "styled-components";
import { Container, InputMixin, LabelMixin } from "../../styles/mixins";

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	margin: 2em 0 2em 2em;
`;
export const Fieldset = styled.fieldset`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	border: none;
`;

export const InputContainer = styled.div`
	${Container}
`;
export const Label = styled.label`
	${LabelMixin}
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	padding-bottom: 0.5em;
`;

export const Input = styled.input`
	${InputMixin}
	box-sizing: border-box;
	margin-top: 1.2em;
	padding: 0.5em 0 0.5em 0.5em;

	&[type="file"] {
		color: transparent;
	}
`;
