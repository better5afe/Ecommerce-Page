import { CartBadgeProps } from '../../../../types/types';

const CartBadge: React.FC<CartBadgeProps> = ({ amount }) => {
	return (
		<div className='absolute -top-[4px] -right-[6px] flex items-center justify-center px-2 bg-orange rounded-lg text-[8px] text-white pointer-events-none'>
			<p>{amount}</p>
		</div>
	);
};

export default CartBadge;
