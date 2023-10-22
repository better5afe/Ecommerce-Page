import { useContext } from 'react';
import { NavContext } from '../../../../context/nav-context';
import IconCart from '../../../../assets/icons/IconCart';
import CartBadge from './CartBadge';

const CartBtn = () => {
	const navCtx = useContext(NavContext);

	return (
		<button
			id='cart-btn'
			onClick={navCtx.toggleCart}
			className='cart-btn relative'
		>
			<IconCart className='pointer-events-none' />
			<CartBadge />
		</button>
	);
};

export default CartBtn;
