import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Pagination, Navigation } from "swiper/modules";
import { CarouselBox } from "./Carousel.styled";
import { Card } from "../../components";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Film {
	id: string;
	title: string;
	poster_path: string;
	overview: string;
}

interface CarouselProps {
	films: Film[];
}

const constructFilmImage = (poster_path: string) => {
	return `https://image.tmdb.org/t/p/w500${poster_path}`;
};

function Carousel({ films }: CarouselProps) {
	return (
		<CarouselBox>
			<Swiper
				slidesPerView={6}
				spaceBetween={0}
				navigation
				mousewheel
				keyboard
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					360: {
						slidesPerView: 1.5,
						spaceBetween: 10,
					},
					425: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					640: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
					1024: {
						slidesPerView: 5,
						spaceBetween: 40,
					},
					1440: {
						slidesPerView: 5,
						spaceBetween: 40,
					},
					1600: {
						slidesPerView: 6,
						spaceBetween: 40,
					},
					1950: {
						slidesPerView: 7,
						spaceBetween: 40,
					},
				}}
				modules={[FreeMode, Pagination, Mousewheel, Navigation]}
			>
				{films.map(({ id, title, poster_path, overview }) => (
					<SwiperSlide key={id}>
						<Card
							id={id}
							filmImage={constructFilmImage(poster_path)}
							text={title}
							description={overview}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</CarouselBox>
	);
}

export default Carousel;
