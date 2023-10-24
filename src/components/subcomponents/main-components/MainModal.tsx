import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { ModalContext } from '../../../context/modal-context';
import { previousSlide, nextSlide } from '../../../store/carousel-slice';
import { CurrentSlide } from '../../../types/types';
import Backdrop from '../../reusable/Backdrop';
import Carousel from './Carousel';
import ProductThumbnails from './product/ProductThumbnails';
import CarouselBtn from '../../reusable/CarouselBtn';
import IconClose from '../../../assets/icons/IconClose';

const MainModal: React.FC<CurrentSlide> = ({ currentSlide }) => {
	const modalCtx = useContext(ModalContext);

	const dispatch = useDispatch();

	const closeModalHandler = () => {
		modalCtx.closeModal();
	};

	return (
		<div
			className='hidden lg:block'
			onClick={closeModalHandler}
		>
			<Backdrop
				className='z-40'
				onClick={() => {
					console.log('test');
				}}
			/>
			<div className='fixed inset-0 flex flex-col justify-center items-center z-50'>
				<div className='relative'>
					<button
						className='modal-btn absolute -top-6 right-0 outline-none'
						onClick={closeModalHandler}
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								closeModalHandler();
							}
						}}
					>
						<IconClose />
					</button>
					<Carousel />
					<CarouselBtn
						id='prev'
						className='top-[210px] -left-[20px]'
						onClick={() => dispatch(previousSlide())}
					/>
					<CarouselBtn
						id='next'
						className='top-[210px] -right-[20px]'
						onClick={() => dispatch(nextSlide())}
					/>
					<ProductThumbnails
						currentSlide={currentSlide}
						className='justify-evenly w-[450px]'
						borderColor='border-transparent	'
					/>
				</div>
			</div>
		</div>
	);
};

export default MainModal;
