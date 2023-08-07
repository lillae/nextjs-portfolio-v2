import Image from "next/image";
import useInView from "react-cool-inview";

import { StackTag, Icons } from "@/components/icons-tags";
import { TitleFour } from "@/components/titles";

const LatestSlide = ({ card }) => {
	const { title, stack, image, description, icons } = card;

	/*
	const { observe, inView } = useInView(
		isMobile
			? {
					onEnter: ({ unobserve }) => unobserve(),
			  }
			: {
					threshold: 0.7,
					onEnter: ({ unobserve }) => unobserve(),
			  }
	);
	*/

	return (
		<div className='max-w-full pr-[20px] w-full space-y-5 flex flex-col sm:flex-row items-center justify-between gap-x-9'>
			<div className='h-auto md:max-h-[400px] w-full mx-auto'>
				<Image
					src={image.src}
					width={image.width}
					height={image.height}
					alt={image.alt}
					className='object-cover object-center'
				/>
			</div>
			<div className='space-y-5 max-w-[350px]'>
				<div className='flex justify-between'>
					<TitleFour>{title}</TitleFour>
					<div className='flex items-center justify-center space-x-2'>
						{icons.map(({ icon, href }, index) => (
							<Icons key={index} href={href}>
								{icon}
							</Icons>
						))}
					</div>
				</div>
				<p className='text-sm sm:text-15 h-[60px]'>{description}</p>
				<div className='space-x-5 pt-5'>
					{stack.map(({ name }, index) => (
						<StackTag key={index}>{name}</StackTag>
					))}
				</div>
			</div>
		</div>
	);
};

export default LatestSlide;
