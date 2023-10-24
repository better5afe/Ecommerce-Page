import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../../store/cart-slice';
import { CartListItemProps } from '../../../../types/types';
import IconTrash from '../../../../assets/icons/IconTrash';

const CartListItem: React.FC<CartListItemProps> = ({
	id,
	name,
	thumbnail,
	price,
	amount,
}) => {
	const dispatch = useDispatch();

	let totalAmount = (price * amount)
		.toFixed(2)
		.replace(/\d(?=(\d{3})+\.)/g, '$&,');

	const removeFromCartHandler = () => {
		dispatch(removeFromCart(id));
	};

	return (
		<li className='flex items-center justify-between mb-6 text-sm'>
			<div className='flex items-center'>
				<img
					src={thumbnail}
					alt='Pictrue of the product.'
					className='w-12 h-12 rounded-md'
				/>
				<div className='flex flex-col ms-4 text-darkGrayishBlue'>
					<p className='lg:mb-1'>{name}</p>
					<div className='flex'>
						<p>
							${price.toFixed(2)} x {amount}&nbsp;
						</p>
						<p className='font-bold text-black'>${totalAmount}</p>
					</div>
				</div>
			</div>
			<button
				className='delete-btn outline-none'
				onClick={removeFromCartHandler}
			>
				<IconTrash />
			</button>
		</li>
	);
};

export default CartListItem;
