import { useContext } from 'react';
import { ModalContext } from '../../../context/modal-context';
import { CurrentSlide } from '../../../types/types';
import ProductImage from './product/ProductImage';
import ProductThumbnails from './product/ProductThumbnails';

const MainProduct: React.FC<CurrentSlide> = ({ currentSlide }) => {
	const modalCtx = useContext(ModalContext);

	const openModalHandler = () => {
		modalCtx.openModal();
	};

	return (
		<div
			className='hidden w-96 lg:block'
			onClick={openModalHandler}
			onKeyDown={(e) => {
				if (e.key === 'Enter') {
					openModalHandler();
				}
			}}
		>
			<ProductImage currentSlide={currentSlide} />
			<ProductThumbnails currentSlide={currentSlide} />
		</div>
	);
};

export default MainProduct;
