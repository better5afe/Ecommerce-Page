import { useContext } from 'react';
import { NavContext } from '../../../../context/nav-context';
import IconCart from '../../../../assets/icons/IconCart';

const CartBtn = () => {
	const navCtx = useContext(NavContext);

	return (
		<button onClick={navCtx.toggleCart}>
			<IconCart />
		</button>
	);
};

export default CartBtn;
