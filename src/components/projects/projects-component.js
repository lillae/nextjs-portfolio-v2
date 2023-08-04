import { TitleTwo } from "@/components/titles";
import { ProjectsCarousel } from ".";

const Projects = ({ strings }) => {
	const { title, subtitle } = strings;
	return (
		<section className=' snap-start flex flex-col justify-center'>
			<div className='wrapper'>
				<div className='mb-12 text-center'>
					<TitleTwo>{title}</TitleTwo>
				</div>
				<ProjectsCarousel strings={strings} />
			</div>
		</section>
	);
};

export default Projects;
