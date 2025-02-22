import styled from "styled-components";
import Button from "../Button";
import { device } from "../../styles/breakpoints";

export const HeaderStyled = styled.header<{
	color?: string;
	isFilmPage?: boolean;
}>`
	position: fixed;
	display: flex;
	justify-content: space-between;
	top: 0;
	width: 100%;
	padding: 0.96rem 8rem 0.96rem 0;
	background-color: ${({ theme, isFilmPage }) =>
		isFilmPage ? theme.colors.black : "transparent"};
	z-index: ${({ theme }) => theme.zindex.positiveMax};

	@media ${device.laptop} {
		padding: 0.96rem 3rem 0.96rem 0;
	}

	@media ${device.mobileXL} {
		padding: 0.26rem 1.5rem 0.26rem 0;
		height: 5.5rem;
	}
`;

export const HeaderButton = styled(Button)`
	position: relative;
	width: 15.9rem;
	margin: 2.56rem 10.4rem 2.56rem 0;

	@media ${device.laptop} {
		width: 11rem;
		margin-right: 3rem;
	}

	@media ${device.mobileXL} {
		margin: 6rem auto;
	}
`;

export const Menu = styled.div<{ $open: boolean }>`
	position: relative;
	display: flex;
	justify-content: center;

	@media ${device.mobileXL} {
		display: flex;
		flex-direction: column;
		justify-content: center;
		background: ${({ theme }) => theme.colors.black};
		transform: ${({ $open }) =>
			$open ? "translateX(0)" : "translateX(-100%)"};
		height: 100vh;
		width: 40vw;
		text-align: left;
		position: absolute;
		top: 0;
		left: 0;
		gap: 4rem;
		z-index: ${({ theme }) => theme.zindex.positivePlus};
		transition: transform 0.3s ease-in-out;
	}

	@media ${device.mobileCustom} {
		width: 100%;
	}
`;
