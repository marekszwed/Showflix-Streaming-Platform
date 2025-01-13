import { styled } from "styled-components";
import { Container, InputMixin, LabelMixin } from "../../styles/mixins";

export const Form = styled.form`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-width: 450px;
	height: auto;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.colors.dark200};
	overflow: hidden;
`;

export const StyledFieldset = styled.fieldset`
	position: relative;
	margin: 48px 68px;
	border: transparent;
`;

export const StyledLegend = styled.legend`
	font-size: ${({ theme }) => theme.fontSize.big};
	font-family: Helvetica, sans-serif;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.colors.white100};
	padding-left: 0.5em;
	margin-bottom: 1em;
`;

export const StyledDiv = styled.div`
	${Container}
`;

export const StyledLabel = styled.label`
	${LabelMixin}
`;

export const StyledInput = styled.input`
	${InputMixin}
	padding: 0.5em 1em;
`;
