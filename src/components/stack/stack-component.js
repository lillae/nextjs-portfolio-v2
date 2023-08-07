import { TitleTwo } from "@/components/titles";
import { StackTag } from "@/components/icons-tags";

const Stack = ({ strings }) => {
	const { title, stack } = strings;
	return (
		<section className='snap-start'>
			<div className='wrapper flex items-center justify-center h-full w-full'>
				<div className='self-center text-center mt-8'>
					<div className='max-w-[500px] w-full mx-auto'>
						<TitleTwo>{title}</TitleTwo>
						<div className='flex flex-wrap gap-4'>
							{stack.map(({ name }, index) => (
								<StackTag key={index}>{name}</StackTag>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Stack;
