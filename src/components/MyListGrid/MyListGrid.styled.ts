import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const MyListGrid = styled.div`
	position: relative;
	display: flex;
	justify-content: start;
	flex-wrap: wrap;
	margin: 5rem 8.5rem 0 8.5rem;
	width: 100%;
	gap: 2rem;

	@media ${device.laptop} {
		margin: 5rem 1rem 5rem 1rem;
	}
`;
