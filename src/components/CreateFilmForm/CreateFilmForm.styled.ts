import styled from "styled-components";
import { Container, InputMixin, LabelMixin } from "../../styles/mixins";
import Button from "../Button";
import { device } from "../../styles/breakpoints";

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	margin: 2em 0 2em 2em;

	@media ${device.tablet} {
		margin: 2rem auto;
	}
`;
export const Fieldset = styled.fieldset`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	border: none;

	@media ${device.tablet} {
		width: 90%;
	}
`;

export const InputContainer = styled.div`
	${Container}

	@media ${device.tablet} {
		width: 90%;
	}
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
	padding: 0.8rem 0 0.8rem 0.8rem;

	&[type="file"] {
		color: transparent;
	}

	@media ${device.tablet} {
		padding: 0.8rem auto;
	}
`;

export const SaveButton = styled(Button)`
	width: 100%;

	@media ${device.tablet} {
		width: 90%;
	}
`;
