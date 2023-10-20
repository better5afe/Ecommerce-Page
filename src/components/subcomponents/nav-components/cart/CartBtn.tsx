import { useContext } from 'react';
import { CartContext } from '../../../../context/cart-context';
import IconCart from '../../../../assets/icons/IconCart';

const CartBtn = () => {
	const cartCtx = useContext(CartContext);

	return (
		<button onClick={cartCtx.toggleCart}>
			<IconCart />
		</button>
	);
};

export default CartBtn;
