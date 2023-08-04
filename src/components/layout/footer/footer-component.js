const Footer = ({ strings }) => {
	const { text } = strings;
	return (
		<footer className='hidden w-full h-50 items-center justify-center p-4 text-sm bg-layout sticky bottom-0 left-0'>
			<p>{text}</p>
		</footer>
	);
};

export default Footer;
