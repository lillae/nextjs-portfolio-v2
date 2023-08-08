"use client";

import Link from "next/link";

const NavMobile = ({ nav }) => {
	return (
		<nav className='md:hidden w-full h-full max-w-container mx-auto '>
			<ul className='w-full h-full flex items-center justify-center'>
				{nav.map(({ title, href, icon }, index) => (
					<li key={index} className='list-none text-xs uppercase px-5 py-2'>
						<Link
							href={href}
							className='flex flex-col items-center justify-center gap-y-1 text-white/90 hover:drop-shadow-text'>
							{icon}
							{title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavMobile;
