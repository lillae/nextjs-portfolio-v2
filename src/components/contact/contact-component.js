import { TitleTwo } from "@/components/titles";
import { ContactFooter } from ".";

const Contact = ({ strings }) => {
	const { title } = strings;
	return (
		<section
			id='contact'
			className='snap-start relative flex flex-col justify-center'>
			<div className='wrapper'>
				<TitleTwo>{title}</TitleTwo>
			</div>
			<ContactFooter />
		</section>
	);
};

export default Contact;
