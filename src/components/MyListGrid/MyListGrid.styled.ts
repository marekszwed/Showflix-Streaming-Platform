import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const MyListGrid = styled.div`
	position: relative;
	display: flex;
	justify-content: start;
	flex-wrap: wrap;
	margin: 3rem 8.5rem 0 8.5rem;
	width: 100%;
	gap: 2rem;

	@media ${device.laptop} {
		margin: 3rem 1rem 5rem 3rem;
	}
	@media ${device.mobile} {
		margin: 3rem 1rem 5rem 2rem;
	}
`;
