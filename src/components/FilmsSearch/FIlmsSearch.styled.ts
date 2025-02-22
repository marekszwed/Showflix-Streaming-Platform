import styled from "styled-components";
import { Pointer } from "../../styles/mixins";
import { device } from "../../styles/breakpoints";

export const SelectBox = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 16.5rem;
	right: 10.5rem;
	z-index: ${({ theme }) => theme.zindex.positivePlus};

	@media ${device.laptop} {
		right: 3rem;
	}

	@media ${device.mobileL} {
		top: 14rem;
		right: 1.5rem;
	}
`;

export const Label = styled.label`
	font-size: ${({ theme }) => theme.fontSize.bigger};
	color: ${({ theme }) => theme.colors.white100};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	padding-left: 0.8em;
`;

export const Select = styled.select`
	font-size: ${({ theme }) => theme.fontSize.bigger};
	color: ${({ theme }) => theme.colors.white100};
	background-color: transparent;
	border-radius: 10px;
	margin-left: 1.8rem;
	padding: 0.32rem 0rem 0.32rem 0.32rem;
	${Pointer}
`;

export const Option = styled.option`
	font-size: ${({ theme }) => theme.fontSize.normal};
	color: ${({ theme }) => theme.colors.white100};
	background-color: ${({ theme }) => theme.colors.dark};
`;
