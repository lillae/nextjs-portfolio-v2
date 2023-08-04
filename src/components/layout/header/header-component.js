import NavDesktop from "./nav-desktop-component";
import NavMobile from "./nav-mobile-component";

const Header = ({ strings }) => {
	return (
		<header className='bg-layout lg:bg-transparent w-full h-20 fixed z-50'>
			<NavDesktop strings={strings} />
			<NavMobile strings={strings} />
		</header>
	);
};

export default Header;
