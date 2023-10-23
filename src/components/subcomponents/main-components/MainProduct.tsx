import { useAppSelector } from '../../../store/typed-hooks';

import ProductImage from './product/ProductImage';
import ProductThumbnails from './product/ProductThumbnails';

const MainProduct = () => {
	const stateSlide = useAppSelector((state) => state.carousel.slide);

	return (
		<div className='hidden w-96 lg:block'>
			<ProductImage currentSlide={stateSlide} />
			<ProductThumbnails currentSlide={stateSlide} />
		</div>
	);
};

export default MainProduct;
