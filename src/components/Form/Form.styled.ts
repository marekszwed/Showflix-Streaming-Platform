import { styled } from "styled-components";
import { Container, InputMixin, LabelMixin } from "../../styles/mixins";
import Button from "../Button";
import { device } from "../../styles/breakpoints";

export const Form = styled.form`
	position: relative;
	display: flex;
	width: 100%;
	max-width: 45rem;
	height: auto;
	border-radius: 1rem;
	border: 1px solid ${({ theme }) => theme.colors.grey};
	background-color: ${({ theme }) => theme.colors.dark100};
	overflow: hidden;

	@media ${device.mobileL} {
		border: none;
		background-color: transparent;
	}
`;

export const StyledFieldset = styled.fieldset`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	margin: 4.8rem 7.8rem;
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

export const FormButton = styled(Button)`
	width: 100%;
	margin: 1.7rem auto;
`;
