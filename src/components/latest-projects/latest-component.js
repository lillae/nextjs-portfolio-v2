import { TitleTwo } from "@/components/titles";
import { LatestCarousel } from ".";

const Latest = ({ strings }) => {
	const { title, subtitle, cards } = strings;
	return (
		<section id='latest' className='snap-start flex flex-col justify-center'>
			<div className='wrapper'>
				<div className='mb-12'>
					<TitleTwo>{title}</TitleTwo>
				</div>
				<LatestCarousel cards={cards} />
			</div>
		</section>
	);
};

export default Latest;
