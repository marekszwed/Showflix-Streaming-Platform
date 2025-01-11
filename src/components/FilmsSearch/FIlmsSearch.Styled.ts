import styled from "styled-components";
import { Pointer } from "../../styles/mixins";

export const SelectBox = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 10em;
	left: 9em;
`;

export const Label = styled.label`
	font-size: ${({ theme }) => theme.fontSize.bigger};
	color: ${({ theme }) => theme.colors.white100};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	padding-left: 0.5em;
`;

export const Select = styled.select`
	font-size: ${({ theme }) => theme.fontSize.bigger};
	color: ${({ theme }) => theme.colors.white100};
	background-color: transparent;
	border-radius: 10px;
	margin-left: 1em;
	padding: 0.2em 0em 0.2em 0.2em;
	${Pointer}
`;

export const Option = styled.option`
	font-size: ${({ theme }) => theme.fontSize.normal};
	color: ${({ theme }) => theme.colors.white100};
	background-color: ${({ theme }) => theme.colors.grey};
`;
