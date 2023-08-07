import { TitleTwo } from "@/components/titles";
import { ContactFooter, ContactForm } from ".";

const Contact = ({ strings }) => {
	const { title } = strings;
	return (
		<section
			id='contact'
			className='snap-start relative flex flex-col justify-center'>
			<div className='wrapper flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between'>
				<TitleTwo>{title}</TitleTwo>
				<ContactForm strings={strings} />
			</div>
			<ContactFooter />
		</section>
	);
};

export default Contact;
