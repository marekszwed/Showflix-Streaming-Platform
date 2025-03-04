import styled from "styled-components";
import { Pointer } from "../../styles/mixins";
import { device } from "../../styles/breakpoints";

export const SelectBox = styled.div`
	position: absolute;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	background-image: linear-gradient(
		180deg,
		rgba(0, 0, 0, 0.9) 12%,
		rgba(255, 255, 255, 0) 100%
	);
	top: 10.5rem;
	height: 10rem;
	padding-right: 20.5rem;
	width: 100vw;
	z-index: ${({ theme }) => theme.zindex.positivePlus};

	@media ${device.laptop} {
		padding-right: 5rem;
	}

	@media ${device.tablet} {
		top: 5rem;
		padding-right: 5rem;
	}

	@media ${device.mobile} {
		padding-right: 5rem;
	}
`;

export const Label = styled.label`
	font-size: ${({ theme }) => theme.fontSize.normal};
	color: ${({ theme }) => theme.colors.white100};
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
	padding-left: 0.8em;
`;

export const Select = styled.select`
	font-size: ${({ theme }) => theme.fontSize.normal};
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
