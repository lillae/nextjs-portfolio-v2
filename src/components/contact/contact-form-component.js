import { ButtonTwo } from "@/components/buttons";

const ContactForm = ({ strings }) => {
	const { form } = strings;
	return (
		<form className='flex flex-col w-[90%] lg:w-full mx-auto text-[13px] text-white'>
			<div className='w-full h-auto flex flex-col lg:flex-row justify-center lg:justify-evenly items-center'>
				<div className='flex flex-col lg:max-w-[595px] w-full'>
					<div className='space-y-3 mb-6'>
						<div className='flex flex-col lg:flex-row w-full justify-between lg:space-x-4 space-y-3 lg:space-y-0'>
							<div className='w-full flex flex-col space-y-1'>
								<label htmlFor='name'>Name:</label>
								<input
									type='text'
									name='name'
									//value={formik.values.name}
									//onChange={formik.handleChange}
									//onBlur={formik.handleBlur}
								/>
								<div className='h-[16px]'>
									{/* <p className='text-red-800 text-xs'>{`${
										formik.touched.name && formik.errors.name
											? formik.errors.name
											: ""
									}`}</p> */}
								</div>
							</div>
							<div className='w-full flex flex-col space-y-1'>
								<label htmlFor='email'>Email:</label>
								<input
									type='email'
									name='email'
									//value={formik.values.email}
									//onChange={formik.handleChange}
									//onBlur={formik.handleBlur}
								/>
								<div className='h-[16px]'>
									{/* <p className='text-red-800 text-xs'>{`${
										formik.touched.email && formik.errors.email
											? formik.errors.email
											: ""
									}`}</p> */}
								</div>
							</div>
						</div>
						<div className='flex flex-col space-y-1'>
							<label htmlFor='subject'>Subject:</label>
							<input
								type='text'
								name='subject'
								//value={formik.values.subject}
								//onChange={formik.handleChange}
								//onBlur={formik.handleBlur}
							/>
							<div className='h-[16px]'>
								{/* <p className='text-red-800 text-xs'>{`${
									formik.touched.subject && formik.errors.subject
										? formik.errors.subject
										: ""
								}`}</p> */}
							</div>
						</div>
						<div className='flex flex-col space-y-1'>
							<label htmlFor='message'>Message:</label>
							<textarea
								type='text'
								name='message'
								rows='4'
								//value={formik.values.message}
								//onChange={formik.handleChange}
								//onBlur={formik.handleBlur}
							/>
							<div className='h-[16px]'>
								{/* <p className='text-red-800 text-xs'>{`${
									formik.touched.message && formik.errors.message
										? formik.errors.message
										: ""
								}`}</p> */}
							</div>
						</div>
					</div>
					<ButtonTwo type='submit'>Submit</ButtonTwo>
				</div>
			</div>
		</form>
	);
};

export default ContactForm;
