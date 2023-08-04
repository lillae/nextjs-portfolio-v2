import Link from "next/link";

const NavMobile = ({ strings }) => {
	const { nav, icons } = strings;
	return (
		<nav className='lg:hidden w-full h-full max-w-container mx-auto '>
			<ul className='w-full h-full flex items-center justify-end'>
				{nav.map(({ title, href }, index) => (
					<li key={index} className='list-none text-17 px-5 py-2'>
						<Link href={href}>{title}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavMobile;
