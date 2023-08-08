import { TitleOne } from "@/components/titles";

const Hero = ({ strings }) => {
	const { title, subtitle, btn } = strings;

	return (
		<section id='home' className='snap-start h-[calc(100vh-80px)] lg:h-screen'>
			<div className='wrapper h-full flex flex-col justify-center items-center lg:items-start space-y-10'>
				<div className='pb-16'>
					<TitleOne>{title}</TitleOne>
					<h2 className='text-xl  1xs:text-3xl md:text-40 leading-normal uppercase -mt-5 md:-mt-8'>
						{subtitle}
					</h2>
				</div>
			</div>
		</section>
	);
};

export default Hero;
