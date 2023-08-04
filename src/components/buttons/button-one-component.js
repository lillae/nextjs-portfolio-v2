import Link from "next/link";

const ButtonOne = ({ children, href }) => {
	return (
		<Link
			href={href}
			className='border border-accent text-sm bg-transparent text-accent shadow-btn w-fit px-6 py-2.5 uppercase hover:bg-[#ffffff08] hover:shadow-btn-hover hover:transition-all hover:duration-500 hover:ease-in-out'>
			{children}
		</Link>
	);
};

export default ButtonOne;
