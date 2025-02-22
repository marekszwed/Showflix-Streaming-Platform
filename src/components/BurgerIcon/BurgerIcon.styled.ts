import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const BurgerIconContainer = styled.button<{ $open: boolean }>`
	position: fixed;
	top: 1.7rem;
	left: 2rem;
	display: none;
	flex-direction: column;
	justify-content: space-around;
	width: 3rem;
	height: 2.5rem;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	z-index: ${({ theme }) => theme.zindex.notification};

	&:focus {
		outline: none;
	}

	@media ${device.mobileXL} {
		display: flex;
	}

	div {
		width: 2.4rem;
		height: 0.25rem;
		background: ${({ theme }) => theme.colors.white100};
		border-radius: 10px;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: left;

		&:first-child {
			transform: ${({ $open }) => ($open ? "rotate(45deg)" : "rotate(0)")};
		}

		&:nth-child(2) {
			opacity: ${({ $open }) => ($open ? "0" : "1")};
			transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(0)")};
		}

		&:nth-child(3) {
			transform: ${({ $open }) => ($open ? "rotate(-45deg)" : "rotate(0)")};
		}
	}
`;
