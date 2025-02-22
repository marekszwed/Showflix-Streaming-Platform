import styled from "styled-components";
import { Pointer } from "../../styles/mixins";
import { device } from "../../styles/breakpoints";

export const SelectorBox = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 3rem;

	@media ${device.mobileXL} {
		margin-right: 2rem;
	}
`;

export const Label = styled.label`
	font-size: ${({ theme }) => theme.fontSize.normal};
	color: ${({ theme }) => theme.colors.white100};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	padding-left: 0.5rem;
`;

export const Select = styled.select`
	font-size: ${({ theme }) => theme.fontSize.normal};
	color: ${({ theme }) => theme.colors.white100};
	background-color: transparent;
	border-radius: 1rem;
	margin-left: 1.6rem;
	padding: 0.32rem 0rem 0.32rem 0.32rem;
	${Pointer}
`;

export const Option = styled.option`
	font-size: ${({ theme }) => theme.fontSize.normal};
	color: ${({ theme }) => theme.colors.white100};
	background-color: ${({ theme }) => theme.colors.dark};
`;
