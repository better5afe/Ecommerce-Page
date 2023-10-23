import { useDispatch } from 'react-redux';
import { selectSlide } from '../../../../store/carousel-slice';
import { CurrentSlide } from '../../../../types/types';
import { productThumbnails } from '../../../../utils/product-thumbnails';

const ProductThumbnails: React.FC<CurrentSlide> = ({ currentSlide }) => {

	const dispatch = useDispatch();

	return (
		<div className='hidden lg:flex justify-between'>
			{productThumbnails.map((thumbnail, index) => (
				<div
					key={index}
					className={`w-[80px] h-[80px] bg-center bg-no-repeat bg-cover border-2 border-white rounded-lg overflow-hidden outline-none cursor-pointer transition-colors duration-300 hover:border-orange focus:border-orange ${
						thumbnail.id === currentSlide && 'active'
					}`}
					style={{ backgroundImage: `url(${thumbnail.src})` }}
					tabIndex={0}
					onClick={() => dispatch(selectSlide(thumbnail.id))}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							dispatch(selectSlide(thumbnail.id));
						}
					}}
				/>
			))}
		</div>
	);
};

export default ProductThumbnails;
