import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { CarouselBox } from "./Carousel.Styled";
import Card from "../Card/Card";
import image from "/the-dark-knight.jpg";
import "swiper/css";

function Carousel() {
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
				<SwiperSlide>
					<Card
						$filmImage={image}
						text="Batman"
						description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, libero."
						type="button"
					></Card>
				</SwiperSlide>
				<SwiperSlide>
					<Card
						$filmImage={image}
						text="Batman"
						description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, libero."
						type="button"
					></Card>
				</SwiperSlide>
				<SwiperSlide>
					<Card
						$filmImage={image}
						text="Batman"
						description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, libero."
						type="button"
					></Card>
				</SwiperSlide>
				<SwiperSlide>
					<Card
						$filmImage={image}
						text="Batman"
						description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, libero."
						type="button"
					></Card>
				</SwiperSlide>
				<SwiperSlide>
					<Card
						$filmImage={image}
						text="Batman"
						description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, libero."
						type="button"
					></Card>
				</SwiperSlide>
				<SwiperSlide>
					<Card
						$filmImage={image}
						text="Batman"
						description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, libero."
						type="button"
					></Card>
				</SwiperSlide>
				<SwiperSlide>
					<Card
						$filmImage={image}
						text="Batman"
						description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, libero."
						type="button"
					></Card>
				</SwiperSlide>
			</Swiper>
		</CarouselBox>
	);
}

export default Carousel;
