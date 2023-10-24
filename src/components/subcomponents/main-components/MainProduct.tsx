import { CurrentSlide } from '../../../types/types';
import ProductImage from './product/ProductImage';
import ProductThumbnails from './product/ProductThumbnails';

const MainProduct: React.FC<CurrentSlide> = ({ currentSlide }) => {
	return (
		<div className='hidden w-96 lg:block'>
			<ProductImage currentSlide={currentSlide} />
			<ProductThumbnails currentSlide={currentSlide} />
		</div>
	);
};

export default MainProduct;
