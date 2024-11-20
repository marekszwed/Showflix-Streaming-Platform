import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { CarouselBox } from "./Carousel.Styled";
import Card from "../Card/Card";
import "swiper/css";

interface Film {
	id: number;
	title: string;
	poster_path: string;
	overview: string;
}

interface CarouselProps {
	films: Film[];
}

function Carousel({ films }: CarouselProps) {
	return (
		<CarouselBox>
			<Swiper
				slidesPerView={4}
				spaceBetween={0}
				pagination={{
					clickable: true,
				}}
				modules={[FreeMode, Pagination]}
				className="mySwiper"
			>
				{films.map((film) => (
					<SwiperSlide key={film.id}>
						<Card
							id={film.id.toString()}
							$filmImage={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
							text={film.title}
							description={film.overview}
							type="button"
						></Card>
					</SwiperSlide>
				))}
			</Swiper>
		</CarouselBox>
	);
}

export default Carousel;
