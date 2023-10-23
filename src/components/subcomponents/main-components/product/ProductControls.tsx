import ProductAmount from './ProductAmount';
import Button from '../../../reusable/Button';

const ProductControls = () => {
	return (
		<div>
			<ProductAmount />
			<Button
				id='product-control'
				className='product-control flex items-center jusity-between'
				text={'Add to cart'}
				onClick={() => {
					console.log('add to cart');
				}}
			/>
		</div>
	);
};

export default ProductControls;
