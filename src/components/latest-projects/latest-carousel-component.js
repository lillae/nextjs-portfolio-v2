"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Keyboard } from "swiper/modules";

import { LatestSlide } from ".";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const LatestCarousel = ({ cards }) => {
	return (
		<Swiper
			direction={"vertical"}
			slidesPerView={1}
			spaceBetween={30}
			centeredSlides={true}
			scrollbar={true}
			grabCursor={true}
			modules={[Scrollbar, Keyboard]}
			className='max-w-full max-h-[400px] w-full'>
			{cards.map((card, index) => (
				<SwiperSlide
					key={index}
					className='rounded-md h-full flex flex-col justify-center items-center text-left'>
					<LatestSlide card={card} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default LatestCarousel;
