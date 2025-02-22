import styled from "styled-components";

export const Container = styled.div`
	position: fixed;
	display: flex;
	top: 14.5rem;
	width: 100%;
	height: 5rem;
	justify-content: start;
`;
export const Label = styled.label`
	display: flex;
	margin-left: 8.5rem;
	width: 20%;
`;

export const Input = styled.input`
	display: flex;
	width: 100%;
	padding-left: 1rem;
	font-size: ${({ theme }) => theme.fontSize.normal};
	background-color: ${({ theme }) => theme.colors.opacity};
	color: ${({ theme }) => theme.colors.white100};
	border-radius: 10px;
	border: 2px solid ${({ theme }) => theme.colors.white200};
	overflow: hidden;

	&:focus {
		border: 2px solid ${({ theme }) => theme.colors.white100};
	}
`;
