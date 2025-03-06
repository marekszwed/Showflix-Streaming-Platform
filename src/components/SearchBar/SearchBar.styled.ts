import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const Container = styled.div`
	position: relative;
	display: flex;
	margin-top: 2rem;
	width: 100%;
	height: 5rem;
	justify-content: start;

	@media ${device.laptop} {
		margin-top: 2rem;
	}
`;
export const Label = styled.label`
	display: flex;
	margin-left: 8rem;

	@media ${device.laptop} {
		margin-left: 3rem;
	}

	@media ${device.mobile} {
		width: 100%;
		margin: 0 2rem 0 2rem;
	}
`;

export const Input = styled.input`
	display: flex;
	width: 100%;
	padding: 2rem 1rem;
	font-size: ${({ theme }) => theme.fontSize.normal};
	background-color: ${({ theme }) => theme.colors.opacity};
	color: ${({ theme }) => theme.colors.white100};
	border-radius: 1rem;
	border: 2px solid ${({ theme }) => theme.colors.white200};
	overflow: hidden;

	&:focus {
		border: 2px solid ${({ theme }) => theme.colors.white100};
	}
`;
