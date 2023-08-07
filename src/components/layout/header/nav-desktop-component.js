"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavDesktop = ({ strings }) => {
	const { nav, icons } = strings;
	const pathname = usePathname();

	return (
		<nav className='hidden lg:block w-full h-full max-w-container mx-auto'>
			<ul className='w-full h-full flex items-center justify-end uppercase'>
				{nav.map(({ title, href }, index) => (
					<li key={index} className='list-none px-5 py-2 1xl:py-3'>
						<Link
							href={href}
							className={`${
								pathname == href ? "active" : ""
							} hover:drop-shadow-text`}>
							{title}
						</Link>
					</li>
				))}
				{icons.map(({ icon, href }, index) => (
					<Link
						href={href}
						rel='noopener noreferrer'
						target='_blank'
						key={index}
						className='pl-5 py-2 1xl:py-3 text-xl'>
						{icon}
					</Link>
				))}
			</ul>
		</nav>
	);
};

export default NavDesktop;
