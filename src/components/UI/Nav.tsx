import NavBtn from '../subcomponents/nav-components/NavBtn';
import NavLogo from '../subcomponents/nav-components/NavLogo';
import CartBtn from '../subcomponents/nav-components/cart/CartBtn';

const Nav = () => {
	return (
		<nav>
			<NavBtn />
			<NavLogo />
			<div>
				<CartBtn />
			</div>
		</nav>
	);
};

export default Nav;
