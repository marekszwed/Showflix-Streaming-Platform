import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import Card from "../Card/Card";
import image from "/the-dark-knight.jpg";
import "swiper/css";

function Carousel() {
	return (
		<>
			<Swiper
				slidesPerView={3}
				spaceBetween={30}
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
						sign="?"
						type="button"
					></Card>
				</SwiperSlide>
				<SwiperSlide>
					<Card
						$filmImage={image}
						text="Batman"
						description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, libero."
						sign="?"
						type="button"
					></Card>
				</SwiperSlide>
				<SwiperSlide>
					<Card
						$filmImage={image}
						text="Batman"
						description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, libero."
						sign="?"
						type="button"
					></Card>
				</SwiperSlide>
				<SwiperSlide>
					<Card
						$filmImage={image}
						text="Batman"
						description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, libero."
						sign="?"
						type="button"
					></Card>
				</SwiperSlide>
				<SwiperSlide>
					<Card
						$filmImage={image}
						text="Batman"
						description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, libero."
						sign="?"
						type="button"
					></Card>
				</SwiperSlide>
				<SwiperSlide>
					<Card
						$filmImage={image}
						text="Batman"
						description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, libero."
						sign="?"
						type="button"
					></Card>
				</SwiperSlide>
				<SwiperSlide>
					<Card
						$filmImage={image}
						text="Batman"
						description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, libero."
						sign="?"
						type="button"
					></Card>
				</SwiperSlide>
			</Swiper>
		</>
	);
}

export default Carousel
