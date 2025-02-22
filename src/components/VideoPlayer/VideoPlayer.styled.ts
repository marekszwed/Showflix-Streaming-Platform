import styled from "styled-components";
import { CardButton } from "../../styles/mixins";
import { device } from "../../styles/breakpoints";

export const PlayerOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.8);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: ${({ theme }) => theme.zindex.overlay};
`;

export const PlayerContent = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 1rem;
	border-radius: 0.8rem;
`;

export const Button = styled.button`
	${CardButton}
	position: relative;
	display: flex;
	align-self: flex-end;
`;

export const Player = styled.iframe`
	display: flex;
	width: 80rem;
	height: 45rem;
	border: none;
	border-radius: 1rem;

	@media ${device.laptop} {
		width: 90vw;
		height: 50svh;
	}

	@media ${device.tablet} {
		width: 95vw;
		height: 55svh;
	}

	@media ${device.mobileL} {
		width: 100vw;
		height: 55svh;
	}
`;
