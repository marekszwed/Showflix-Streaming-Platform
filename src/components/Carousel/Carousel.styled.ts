import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const CarouselBox = styled.div`
	width: 100%;
	align-self: flex-end;

	@media ${device.tablet} {
		margin-bottom: 3rem;
	}

	.swiper-slide {
		padding: 1rem 0;
	}

	.swiper-wrapper {
		margin: 1rem 0 3rem 0;
	}

	.swiper-pagination {
		bottom: 0em;
	}

	.swiper-pagination-bullet {
		background-color: ${({ theme }) => theme.colors.white100};
		width: 1.2rem;
		height: 1.2rem;
		opacity: 0.5;

		@media ${device.mobileCustomCarousel} {
			width: 1rem;
			height: 1rem;
		}
	}
	.swiper-pagination-bullet-active {
		background-color: red;
		opacity: 1;
	}
`;
