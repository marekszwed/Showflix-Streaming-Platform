import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { CarouselBox } from "./Carousel.styled";
import { Card } from "../../components";
import "swiper/css";

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
				pagination={{
					clickable: true,
				}}
				modules={[FreeMode, Pagination]}
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
