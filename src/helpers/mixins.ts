import { css } from "styled-components";

export const PageBackground = css`
	position: relative;
	display: flex;
	background-position: center;
	background-size: cover;
	width: 100vw;
`;

export const LabelMixin = css`
	display: flex;
	padding: 1em 1em;
	font-size: ${({ theme }) => theme.fontSize.normal};
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.pureWhite};
	overflow: hidden;
`;

export const InputMixin = css`
	display: flex;
	width: 100%;
	font-size: ${({ theme }) => theme.fontSize.normal};
	
	background-color: transparent;
	color: ${({ theme }) => theme.colors.pureWhite};
	border-radius: 5px;
	border: 2px solid transparent;
	overflow: hidden;

	&:focus {
		border: 2px solid ${({ theme }) => theme.colors.pureWhite};
	}
`;

export const ErrorMixin = css`
	display: ${(error) => (error ? "flex" : "none")};
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.error};
	font-size: ${({ theme }) => theme.fontSize.small};
`;

export const Container = css`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	
	margin-bottom: 4em;
`;