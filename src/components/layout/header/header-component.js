import NavDesktop from "./nav-desktop-component";
import NavMobile from "./nav-mobile-component";

const Header = ({ strings }) => {
	return (
		<header className='bg-layout/60 backdrop-blur-md lg:bg-transparent w-full h-20 fixed bottom-0 md:top-0 left-0 z-50'>
			<NavDesktop strings={strings} />
			<NavMobile nav={strings.nav_mobile} />
		</header>
	);
};

export default Header;
