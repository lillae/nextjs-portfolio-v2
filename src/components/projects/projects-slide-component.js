import Image from "next/image";

import { StackTag, Icons } from "@/components/icons-tags";

const ProjectsSlide = ({ card }) => {
	const { title, stack, image, description, icons } = card;
	return (
		<div className='max-w-full mx-auto space-y-5'>
			<div className='max-h-[400px] w-full mx-auto'>
				<Image
					src={image.src}
					width={image.width}
					height={image.height}
					alt={image.alt}
					className='object-cover object-center'
				/>
			</div>
			<div className='flex justify-between'>
				<h4 className='text-base uppercase'>{title}</h4>
				<div className='flex items-center justify-center space-x-2'>
					{icons.map(({ icon, href }, index) => (
						<Icons key={index} href={href}>
							{icon}
						</Icons>
					))}
				</div>
			</div>
			<p className='text-15 h-[72px]'>{description}</p>
			<div className='space-x-5 pb-8'>
				{stack.map(({ name }, index) => (
					<StackTag key={index}>{name}</StackTag>
				))}
			</div>
		</div>
	);
};

export default ProjectsSlide;
