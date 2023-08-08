"use client";

import React, { useState, useEffect } from "react";

import NavDesktop from "./nav-desktop-component";
import NavMobile from "./nav-mobile-component";

const Header = ({ strings }) => {
	const [scrollPos, setScrollPos] = useState(0);

	const handleScroll = () => {
		const wrapper = document.querySelector(".snap-container");
		setScrollPos(wrapper.scrollTop);
	};

	useEffect(() => {
		const wrapper = document.querySelector(".snap-container");
		wrapper.addEventListener("scroll", handleScroll);
		return () => wrapper.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`${
				scrollPos > 0
					? "1xl:hidden"
					: "bg-layout/60 backdrop-blur-md  1xl:bg-transparent 1xl:backdrop-blur-none w-full h-20 fixed bottom-0 md:top-0 left-0 z-50"
			}`}>
			<NavDesktop strings={strings} />
			<NavMobile nav={strings.nav_mobile} />
		</header>
	);
};

export default Header;
