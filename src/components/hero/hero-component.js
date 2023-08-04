import { TitleOne } from "@/components/titles";
import { ButtonOne } from "@/components/buttons";

const Hero = ({ strings }) => {
	const { title, subtitle, btn } = strings;

	return (
		<section
			id='home'
			className='bg-frame-1 snap-start h-screen md:h-[50vh] lg:h-screen'>
			<div className='wrapper h-full flex flex-col justify-center items-start space-y-10 -mt-16 pt-150'>
				<div>
					<TitleOne>{title}</TitleOne>
					<h2 className='text-40 leading-normal uppercase -mt-8'>{subtitle}</h2>
				</div>
			</div>
		</section>
	);
};

export default Hero;
