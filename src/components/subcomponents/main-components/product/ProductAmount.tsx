import AmountBtn from '../../../reusable/AmountBtn';

const ProductAmount = () => {
	return (
		<div className='flex items-center justify-between mb-6 bg-lightGrayishBlue rounded-md'>
			<AmountBtn id='decrease' onClick={() => console.log('test')} />
			<p className='font-bold'>5</p>
			<AmountBtn id='increase' onClick={() => console.log('test')} />
		</div>
	);
};

export default ProductAmount;
