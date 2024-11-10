import { styled } from "styled-components";

export const Form = styled.form`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-width: 450px;
	height: auto;
	border-radius: 10px;
	background-color: ${(props) => props.theme.colors.formBackground};
	overflow: hidden;
`;

export const StyledFieldset = styled.fieldset`
	position: relative;
	margin: 48px 68px;
`;

export const StyledLegend = styled.legend`
	font-size: ${(props) => props.theme.fontSize.big};
	font-family: Helvetica, sans-serif;
	font-weight: ${(props) => props.theme.fontWeight.bold};
	color: ${(props) => props.theme.colors.pureWhite};
	padding-left: 0.5em;
	margin-bottom: 1em;
`;

export const StyledDiv = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 315px;
	margin-bottom: 4em;
`;

export const StyledLabel = styled.label`
	display: flex;
	padding: 1em 1em;
	font-size: ${(props) => props.theme.fontSize.normal};
	text-transform: uppercase;
	color: ${(props) => props.theme.colors.pureWhite};
	overflow: hidden;
`;

export const StyledInput = styled.input`
	display: flex;
	width: 100%;
	font-size: ${(props) => props.theme.fontSize.normal};
	padding: 0.5em 1em;
	background-color: transparent;
	color: ${(props) => props.theme.colors.pureWhite};
	border-radius: 5px;
	border: 2px solid transparent;
	overflow: hidden;

	&:focus {
		border: 2px solid ${(props) => props.theme.colors.pureWhite};
	}
`;

export const StyledError = styled.p<{ $error?: boolean }>`
	display: ${(error) => (error ? "flex" : "none")};
	padding: 0.5em 0 0 1.7em;
	text-transform: uppercase;
	color: ${(props) => props.theme.colors.error};
	font-size: ${(props) => props.theme.fontSize.small};
`;
