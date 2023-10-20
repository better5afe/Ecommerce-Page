import { useContext } from 'react';
import { NavContext } from '../../../context/nav-context';
import IconClose from '../../../assets/icons/IconClose';
import NavLink from './NavLink';

const navLinks = ['Collections', 'Men', 'Women', 'About', 'Contact'];

const NavLinks = () => {
	const navCtx = useContext(NavContext);

	return (
		<ul
			className={`fixed top-0 bottom-0 left-0 w-52 p-5 bg-white z-30 transition-transform duration-300 ${
				navCtx.isNavOpen ? '-translate-x-0' : '-translate-x-full'
			}`}
		>
			<button className='close-nav mb-8' onClick={navCtx.closeNav}>
				<IconClose />
			</button>
			{navLinks.map((navLink, index) => (
				<NavLink key={index} text={navLink} />
			))}
		</ul>
	);
};

export default NavLinks;
