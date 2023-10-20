import { useContext } from 'react';
import { NavContext } from '../../context/nav-context';
import NavOpenBtn from '../subcomponents/nav-components/NavOpenBtn';
import NavLogo from '../subcomponents/nav-components/NavLogo';
import NavLinks from '../subcomponents/nav-components/NavLinks';
import CartBtn from '../subcomponents/nav-components/cart/CartBtn';
import NavUser from '../subcomponents/nav-components/NavUser';
import Backdrop from '../reusable/Backdrop';

const Nav = () => {
	const navCtx = useContext(NavContext);

	return (
		<div className='container sticky top-0 mx-auto'>
			<nav className='flex items-center justify-between p-4 lg:py-6 border-b'>
				<div className='flex items-end'>
					<NavOpenBtn />
					<NavLogo />
				<NavLinks />
				</div>
				<div className='flex items-center justify-between'>
					<CartBtn />
					<NavUser />
				</div>
			</nav>
			<Backdrop
				className={navCtx.isNavOpen ? 'opacity-70 z-20' : ''}
				onClick={navCtx.closeNav}
			/>
		</div>
	);
};

export default Nav;
