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
	margin-bottom: 1em;
`;

export const StyledDiv = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 315px;
	margin-bottom: 4em;
	border: 2px solid #cecece;
	border-radius: 10px;
	overflow: hidden;

	&:focus {
		border: 3px solid white;
	}
`;

export const StyledInput = styled.input`
	width: 100%;
	font-size: ${(props) => props.theme.fontSize.normal};
	padding: 0.5em 1em;
	background-color: transparent;
	border-radius: 5px;
	overflow: hidden;
`;
