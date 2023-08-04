import { TitleTwo } from "@/components/titles";

const About = ({ strings }) => {
	const { title } = strings;
	return (
		<section id='about' className='snap-start flex flex-col justify-center'>
			<div className='wrapper'>
				<TitleTwo>{title}</TitleTwo>
			</div>
		</section>
	);
};

export default About;
