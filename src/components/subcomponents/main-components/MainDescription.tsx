import { product } from '../../../utils/product-info';
import ProductControls from './product/ProductControls';

const MainDescription = () => {
	return (
		<div>
			<p>{product.producent}</p>
			<h2>{product.productName}</h2>
			<p>{product.productInfo}</p>
			<div>
				<div>
					<p>${product.productPrice.toFixed(2)}</p>
					{product.isDiscounted && <p>{product.discountAmount}%</p>}
				</div>
				{product.isDiscounted && <p>${product.originalPrice.toFixed(2)}</p>}
			</div>
			<ProductControls />
		</div>
	);
};

export default MainDescription;
