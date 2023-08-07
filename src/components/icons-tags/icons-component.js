import Link from "next/link";

const Icons = ({ children, href }) => {
	return (
		<Link
			href={href}
			rel='noopener noreferrer'
			target='_blank'
			className='text-xl text-accent hover:drop-shadow-text'>
			{children}
		</Link>
	);
};

export default Icons;
