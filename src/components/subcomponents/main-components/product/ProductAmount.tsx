import AmountBtn from '../../../reusable/AmountBtn';

const ProductAmount = () => {
	return (
		<div className='flex items-center justify-between mb-6 bg-lightGrayishBlue rounded-md md:w-1/4 md:mb-0 md:me-8 md:py-1'>
			<AmountBtn id='decrease' onClick={() => console.log('test')} />
			<p className='font-bold'>5</p>
			<AmountBtn id='increase' onClick={() => console.log('test')} />
		</div>
	);
};

export default ProductAmount;
