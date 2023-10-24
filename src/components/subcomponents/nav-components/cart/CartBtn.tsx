import { useContext } from 'react';
import { useAppSelector } from '../../../../store/typed-hooks';
import { NavContext } from '../../../../context/nav-context';
import IconCart from '../../../../assets/icons/IconCart';
import CartBadge from './CartBadge';

const CartBtn = () => {
	const cartState = useAppSelector((state) => state.cart);

	const navCtx = useContext(NavContext);

	let totalItemsAmount = cartState.cartItems.reduce((total, cartItem) => {
		return total + cartItem.amount;
	}, 0);

	return (
		<button
			id='cart-btn'
			onClick={navCtx.toggleCart}
			className='cart-btn relative'
		>
			<IconCart className='pointer-events-none' />
			{cartState.cartItems.length > 0 && (
				<CartBadge amount={totalItemsAmount} />
			)}
		</button>
	);
};

export default CartBtn;
