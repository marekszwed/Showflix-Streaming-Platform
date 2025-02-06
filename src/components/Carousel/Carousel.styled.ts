import styled from "styled-components";

export const CarouselBox = styled.div`
	width: 100%;
	align-self: flex-end;
	margin: 3em 0;

	.swiper-slide {
		padding: 1em 0;
	}

	.swiper-wrapper {
		margin: 3em 0;
	}

	.swiper-pagination {
		bottom: 0em;
	}

	.swiper-pagination-bullet {
		background-color: ${({ theme }) => theme.colors.white100};
		width: 12px;
		height: 12px;
		opacity: 0.5;
	}
	.swiper-pagination-bullet-active {
		background-color: red;
		opacity: 1;
	}
`;
