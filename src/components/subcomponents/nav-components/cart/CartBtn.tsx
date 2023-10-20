import { useContext } from 'react';
import { NavContext } from '../../../../context/nav-context';
import IconCart from '../../../../assets/icons/IconCart';
import CartBadge from './CartBadge';

const CartBtn = () => {
	const navCtx = useContext(NavContext);

	return (
		<button onClick={navCtx.toggleCart} className='cart-btn relative'>
			<IconCart />
			<CartBadge />
		</button>
	);
};

export default CartBtn;
