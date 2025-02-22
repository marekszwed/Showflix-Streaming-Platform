import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const SectionTitleContainer = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	margin-top: 1rem;
	padding-left: 20rem;

	@media ${device.laptop} {
		padding-left: 6rem;
	}

	@media ${device.mobileXL} {
		padding-left: 6rem;
	}
	@media ${device.mobileL} {
		padding-left: 3rem;
	}
`;
export const Title = styled.h2`
	position: relative;
	font-size: ${({ theme }) => theme.fontSize.mediumBig};
	color: ${({ theme }) => theme.colors.white100};

	&::after {
		content: "";
		display: inline-block;
		width: 100%;
		height: 4px;
		background-color: ${({ theme }) => theme.colors.yellow};
		position: absolute;
		left: 0;
		bottom: -1rem;
		border-radius: 2px;
	}
`;
