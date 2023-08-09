import { TitleTwo } from "@/components/titles";
import { ProjectsCarousel } from ".";

const Projects = ({ strings }) => {
	const { title, subtitle } = strings;
	return (
		<section id='projects' className='snap-start flex flex-col justify-center'>
			<div className='wrapper'>
				<div className='mb-12 text-center'>
					<TitleTwo>{title}</TitleTwo>
					<p className='text-white/90'>{subtitle}</p>
				</div>
				<ProjectsCarousel strings={strings} />
			</div>
		</section>
	);
};

export default Projects;
