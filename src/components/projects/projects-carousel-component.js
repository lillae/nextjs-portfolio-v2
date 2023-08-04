"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard } from "swiper/modules";

import { ProjectsSlide } from ".";

// import styles bundle
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProjectsCarousel = ({ strings }) => {
	const { cards } = strings;

	return (
		<Swiper
			slidesPerView={1}
			spaceBetween={50}
			pagination={{
				type: "progressbar",
			}}
			breakpoints={{
				768: { slidesPerView: 3 },
			}}
			grabCursor={true}
			direction='horizontal'
			keyboard={{
				enabled: true,
			}}
			navigation={true}
			modules={[Pagination, Navigation, Keyboard]}
			className='max-w-full max-h-[600px] w-full'>
			{cards.map((card, index) => (
				<SwiperSlide
					key={index}
					className='space-y-4 rounded-md h-auto flex flex-col justify-center items-center text-left mt-10'>
					<ProjectsSlide card={card} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ProjectsCarousel;
