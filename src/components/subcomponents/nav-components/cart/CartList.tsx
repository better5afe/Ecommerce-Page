import CartListItem from './CartListItem';
const CartItemThumbnail = require('../../../../assets/images/image-product-1-thumbnail.jpg');

const dummyItems = [
	{
		id: 1,
		name: 'Fall Limited Edition Sneakers',
		thumbnail: CartItemThumbnail,
		price: 125.0,
		amount: 3,
	},
];

const CartList = () => {
	return (
		<ul className='absolute top-[70px] left-4 right-4 rounded-md lg:top-[85px] lg:left-[65%] lg:right-0 xl:left-[70%] bg-red-200'>
			<p
				className={`p-4 text-sm font-bold ${
					dummyItems.length === 0 && 'border-b'
				}`}
			>
				Cart
			</p>
			{dummyItems.length === 0 ? (
				<p className='py-14 text-sm text-darkGrayishBlue font-bold text-center'>
					Your cart is empty
				</p>
			) : (
				<>
					{dummyItems.map((dummyItem) => (
						<CartListItem
							id={dummyItem.id}
							name={dummyItem.name}
							thumbnail={dummyItem.thumbnail}
							price={dummyItem.price}
							amount={dummyItem.amount}
						/>
					))}
				</>
			)}
		</ul>
	);
};

export default CartList;
