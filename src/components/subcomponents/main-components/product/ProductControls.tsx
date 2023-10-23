import ProductAmount from './ProductAmount';
import Button from '../../../reusable/Button';

const ProductControls = () => {
	return (
		<div className='md:flex md:items-center md:justify-center'>
			<ProductAmount />
			<Button
				id='product-control'
				className='product-control flex items-center justify-center w-full md:w-auto md:ms-8 md:px-16'
				text={'Add to cart'}
				onClick={() => {
					console.log('add to cart');
				}}
			/>
		</div>
	);
};

export default ProductControls;
