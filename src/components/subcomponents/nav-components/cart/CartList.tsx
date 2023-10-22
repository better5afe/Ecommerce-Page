import { useContext } from 'react';
import { NavContext } from '../../../../context/nav-context';
import CartListItem from './CartListItem';
import Button from '../../../reusable/Button';

const CartItemThumbnail = require('../../../../assets/images/image-product-1-thumbnail.jpg');

const dummyItems = [
	{
		id: 1,
		name: 'Fall Limited Edition Sneakers',
		thumbnail: CartItemThumbnail,
		price: 125,
		amount: 3,
	},
];

const CartList = () => {
	const navCtx = useContext(NavContext);

	return (
		<ul
			id='cart'
			className='cart absolute top-[70px] left-4 right-4 bg-white rounded-md shadow-lg shadow-grayishBlue lg:top-[80px] lg:left-[65%] lg:right-0 xl:left-[70%] z-20'
		>
			<p
				className={`p-4 text-sm font-bold ${
					dummyItems.length > 0 && 'border-b'
				}`}
			>
				Cart
			</p>
			{dummyItems.length === 0 ? (
				<p className='py-14 text-sm text-darkGrayishBlue font-bold text-center'>
					Your cart is empty
				</p>
			) : (
				<div className='m-4 mb-6'>
					{dummyItems.map((dummyItem, index) => (
						<CartListItem
							key={index}
							id={dummyItem.id}
							name={dummyItem.name}
							thumbnail={dummyItem.thumbnail}
							price={dummyItem.price}
							amount={dummyItem.amount}
						/>
					))}
					<Button
						onClick={() => {
							navCtx.closeCart();
						}}
						className='w-full'
						text='Checkout'
					/>
				</div>
			)}
		</ul>
	);
};

export default CartList;
