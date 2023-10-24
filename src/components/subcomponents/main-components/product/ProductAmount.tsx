import { useAppSelector } from '../../../../store/typed-hooks';
import { useDispatch } from 'react-redux';
import { increaseAmount, decreaseAmount } from '../../../../store/cart-slice';
import AmountBtn from '../../../reusable/AmountBtn';

const ProductAmount = () => {
	const productAmount = useAppSelector((state) => state.cart.amount);

	const dispatch = useDispatch();

	const increaseAmountHandler = () => {
		dispatch(increaseAmount());
	};

	const decreaseAmountHandler = () => {
		dispatch(decreaseAmount());
	};

	return (
		<div className='flex items-center justify-between mb-6 bg-lightGrayishBlue rounded-md md:w-1/4 md:mb-0 md:me-8 md:py-1 lg:w-1/3 lg:me-0'>
			<AmountBtn id='decrease' onClick={decreaseAmountHandler} />
			<p className='font-bold'>{productAmount}</p>
			<AmountBtn id='increase' onClick={increaseAmountHandler} />
		</div>
	);
};

export default ProductAmount;
