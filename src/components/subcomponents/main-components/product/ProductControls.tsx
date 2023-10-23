import ProductAmount from './ProductAmount';
import Button from '../../../reusable/Button';

const ProductControls = () => {
	return (
		<div>
			<ProductAmount />
			<Button
				id='product-control'
				className='product-control flex items-center justify-center w-full'
				text={'Add to cart'}
				onClick={() => {
					console.log('add to cart');
				}}
			/>
		</div>
	);
};

export default ProductControls;
