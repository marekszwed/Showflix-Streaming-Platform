import { styled } from "styled-components";
import { Container, InputMixin, LabelMixin } from "../../styles/mixins";

export const Form = styled.form`
	position: relative;
	display: flex;
	width: 100%;
	max-width: 450px;
	height: auto;
	border-radius: 10px;
	border: 1px solid ${({ theme }) => theme.colors.grey};
	background-color: ${({ theme }) => theme.colors.dark100};
	overflow: hidden;
`;

export const StyledFieldset = styled.fieldset`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	margin: 48px 78px;
	border: transparent;
`;

export const StyledLegend = styled.legend`
	font-size: ${({ theme }) => theme.fontSize.mediumBig};
	font-family: Helvetica, sans-serif;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.colors.white100};
	text-align: center;
	margin-bottom: 1.5em;
`;

export const StyledDiv = styled.div`
	${Container}
`;

export const StyledLabel = styled.label`
	${LabelMixin}
`;

export const StyledInput = styled.input`
	${InputMixin}
	box-sizing: border-box;
	margin-top: 0.6em;
	padding: 0.5em 0 0.5em 0.5em;
`;
