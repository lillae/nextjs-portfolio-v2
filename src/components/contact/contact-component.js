"use client";

import { TitleTwo } from "@/components/titles";
import { ContactFooter, ContactForm } from ".";

const Contact = ({ strings }) => {
	const { title } = strings;

	return (
		<section
			id='contact'
			className='snap-start relative flex flex-col justify-center max-w-[900px] mx-auto'>
			<div className='wrapper flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between pb-[80px] md:pb-0'>
				<TitleTwo>{title}</TitleTwo>
				<ContactForm strings={strings} />
			</div>
			<ContactFooter />
		</section>
	);
};

export default Contact;
