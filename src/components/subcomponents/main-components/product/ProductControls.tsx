import { useAppSelector } from '../../../../store/typed-hooks';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../store/cart-slice';
import { product } from '../../../../utils/product-info';
import { CartItem } from '../../../../types/types';
import ProductAmount from './ProductAmount';
import Button from '../../../reusable/Button';

const ProductControls = () => {
	const selectedAmount = useAppSelector((state) => state.cart.amount);

	const dispatch = useDispatch();

	const addToCartHandler = () => {
		let itemToAdd: CartItem = {
			id: product.id,
			name: product.productName,
			thumbnail: product.productImg,
			price: product.originalPrice,
			amount: selectedAmount,
		};

		dispatch(addToCart(itemToAdd));
	};

	return (
		<div className='md:flex md:items-center md:justify-center lg:justify-between'>
			<ProductAmount />
			<Button
				id='product-control'
				className='product-control flex items-center justify-center w-full md:w-auto md:ms-8 md:px-16 lg:ms-0 lg:px-20'
				text={'Add to cart'}
				onClick={addToCartHandler}
			/>
		</div>
	);
};

export default ProductControls;
