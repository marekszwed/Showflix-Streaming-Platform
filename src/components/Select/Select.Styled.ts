import styled from "styled-components";

export const SelectBox = styled.div`
	position: fixed;
	display: flex;
	flex-direction: column;
	top: 10em;
	left: 10em;
`;

export const Label = styled.label`
	font-size: ${(props) => props.theme.fontSize.bigger};
	color: ${(props) => props.theme.colors.pureWhite};
	margin-bottom: 1em;
	padding-left: 0.5em;
`;

export const Select = styled.select`
	font-size: ${(props) => props.theme.fontSize.bigger};
	color: ${(props) => props.theme.colors.pureWhite};
	background-color: transparent;
	border-radius: 10px;
	padding: 0.2em 0em 0.2em 0.2em;
`;

export const Option = styled.option`
	font-size: ${(props) => props.theme.fontSize.bigger};
	color: ${(props) => props.theme.colors.pureWhite};
	background-color: ${(props) => props.theme.colors.filmSelect};
`;
