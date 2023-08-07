import Image from "next/image";
import { TitleTwo } from "@/components/titles";
import { StackTag } from "@/components/icons-tags";
import TitleThree from "../titles/title-three-component";

const About = ({ strings }) => {
	const { title, title_2, images, intro, experience, stack } = strings;
	return (
		<section id='about' className='snap-start flex flex-col justify-center'>
			<div className='wrapper w-full flex flex-col'>
				<TitleTwo extraStyles='flex lg:hidden text-center'>{title}</TitleTwo>
				<div className='flex flex-col-reverse lg:flex-row items-center justify-between'>
					<div className='space-y-8'>
						<div className='max-w-[600px] w-full'>
							<TitleTwo className='hidden lg:block'>{title}</TitleTwo>
							<p>{intro.text}</p>
						</div>
						<div className='px-4 pb-6 bg-layout/40 rounded-[20px]'>
							<TitleTwo>Experience</TitleTwo>
							{experience.map(
								({ year, company, description, stack }, index) => (
									<div
										key={index}
										className='flex flex-col lg:flex-row items-start justify-start lg:gap-x-4'>
										<div className='py-[0.5px]'>
											<small className='uppercase font-medium'>{year}</small>
										</div>
										<div className='space-y-4'>
											<h4 className='text-xl drop-shadow-headings'>
												{company}
											</h4>
											<div>
												{description.map(({ text }, index) => (
													<p key={index}>{text}</p>
												))}
											</div>
											<div className='flex flex-wrap lg:space-x-4'>
												{stack.map(({ name }, index) => (
													<StackTag key={index}>{name}</StackTag>
												))}
											</div>
										</div>
									</div>
								)
							)}
						</div>
						<div className='mt-8 max-w-[500px] w-full space-y-4 '>
							<TitleThree className=''>{title_2}</TitleThree>
							<div className='flex flex-wrap  gap-x-4 gap-y-2'>
								{stack.map(({ name }, index) => (
									<StackTag key={index}>{name}</StackTag>
								))}
							</div>
						</div>
					</div>
					<div className='max-w-full lg:max-w-[450px] w-full mb-5 lg:mb-0'>
						<Image
							src={images.avatar.src}
							alt={images.avatar.alt}
							width={images.avatar.width}
							height={images.avatar.height}
							className='object-center object-cover'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
