import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const PageTitleContainer = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	margin-top: 13rem;
	padding-left: 8rem;
	z-index: ${({ theme }) => theme.zindex.positive};

	@media ${device.laptop} {
		padding-left: 3rem;
	}
	@media ${device.tablet} {
		margin-top: 8rem;
	}

	@media ${device.mobile} {
		padding-left: 2rem;
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
