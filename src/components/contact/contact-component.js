"use client";

import { TitleTwo } from "@/components/titles";
import { ContactFooter, ContactForm } from ".";

const Contact = ({ strings }) => {
	const { title } = strings;

	return (
		<section
			id='contact'
			className='snap-start relative flex flex-col justify-center mx-auto'>
			<div className='wrapper pb-[80px] md:pb-0'>
				<div className='max-w-[900px] w-full mx-auto flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between'>
					<TitleTwo>{title}</TitleTwo>
					<ContactForm strings={strings} />
				</div>
			</div>
			<ContactFooter />
		</section>
	);
};

export default Contact;
