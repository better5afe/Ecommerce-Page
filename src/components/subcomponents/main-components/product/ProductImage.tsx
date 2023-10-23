import { CurrentSlide } from '../../../../types/types';
import { slides } from '../../../../utils/slides';

const ProductImage: React.FC<CurrentSlide> = ({ currentSlide }) => {
	return (
		<div
			className='hidden h-96 w-96 mb-6 bg-center bg-no-repeat bg-cover border-2 border-transparent rounded-xl outline-none cursor-pointer transition-colors duration-300 hover:border-2 hover:border-orange focus:border-2 focus:border-orange lg:block'
			style={{ backgroundImage: `url(${slides[currentSlide - 1].src})` }}
			tabIndex={0}
			onClick={() => console.log('open carousel')}
		></div>
	);
};

export default ProductImage;
