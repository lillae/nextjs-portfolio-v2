"use client";

import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BsCheck2Circle } from "react-icons/bs";
import { sendEmail } from "@/utils/send-email";

import { ButtonTwo } from "@/components/buttons";

const ContactForm = ({ strings }) => {
	const { form } = strings;
	const [isSent, setIsSent] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			if (isSent) setIsSent(false);
		}, 2000);
	}, [isSent]);

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},

		validationSchema: Yup.object({
			name: Yup.string()
				.min(5, "Name must be minimum 5 characters")
				.max(20, "Name must be 20 characters or less.")
				.required("Required"),
			email: Yup.string().email("Invalid email address").required("Required"),
			subject: Yup.string()
				.max(20, "Subject must be 20 characters or less.")
				.required("Required"),
			message: Yup.string().required("Required"),
		}),

		onSubmit: async (values, { resetForm }) => {
			await sendEmail(values);
			setIsSent(true);
			resetForm({ values: "" });
		},
	});

	return (
		<form
			onSubmit={formik.handleSubmit}
			className='flex flex-col w-[90%] lg:w-full mx-auto lg:mx-0 max-w-[600px] text-[13px] text-white'>
			<div className='w-full h-auto flex flex-col lg:flex-row justify-center lg:justify-evenly items-center'>
				<div className='flex flex-col w-full'>
					<div className='space-y-3 mb-6'>
						<div className='flex flex-col lg:flex-row w-full justify-between lg:space-x-4 space-y-3 lg:space-y-0'>
							<div className='w-full flex flex-col space-y-1'>
								<label htmlFor='name'>{form.label_name}</label>
								<input
									type='text'
									name='name'
									value={formik.values.name}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
								<div className='h-[16px]'>
									<p className='text-accent text-xs'>{`${
										formik.touched.name && formik.errors.name
											? formik.errors.name
											: ""
									}`}</p>
								</div>
							</div>
							<div className='w-full flex flex-col space-y-1'>
								<label htmlFor='email'>{form.label_email}</label>
								<input
									type='email'
									name='email'
									value={formik.values.email}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
								<div className='h-[16px]'>
									<p className='text-accent text-xs'>{`${
										formik.touched.email && formik.errors.email
											? formik.errors.email
											: ""
									}`}</p>
								</div>
							</div>
						</div>
						<div className='flex flex-col space-y-1'>
							<label htmlFor='subject'>{form.label_subject}</label>
							<input
								type='text'
								name='subject'
								value={formik.values.subject}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							<div className='h-[16px]'>
								<p className='text-accent text-xs'>{`${
									formik.touched.subject && formik.errors.subject
										? formik.errors.subject
										: ""
								}`}</p>
							</div>
						</div>
						<div className='flex flex-col space-y-1'>
							<label htmlFor='message'>{form.label_msg}</label>
							<textarea
								type='text'
								name='message'
								rows='4'
								value={formik.values.message}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							<div className='h-[16px]'>
								<p className='text-accent text-xs'>{`${
									formik.touched.message && formik.errors.message
										? formik.errors.message
										: ""
								}`}</p>
							</div>
						</div>
					</div>
					<ButtonTwo type='submit'>Submit</ButtonTwo>
					<div className='h-[25px]'>
						{isSent && (
							<div className='w-fit mx-auto flex items-center justify-center gap-x-2 mt-4'>
								<BsCheck2Circle className='text-accent text-2xl' />
								<p>Message sent</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</form>
	);
};

export default ContactForm;
