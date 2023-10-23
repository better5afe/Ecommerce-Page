import { useEffect } from 'react';
import { useAppSelector } from '../../../store/typed-hooks';
import { useDispatch } from 'react-redux';
import { previousSlide, nextSlide } from '../../../store/carousel-slice';
import { slides } from '../../../utils/slides';
import CarouselBtn from '../../reusable/CarouselBtn';

const MobileCarousel = () => {
	const currentSlide = useAppSelector((state) => state.carousel.slide);

	const dispatch = useDispatch();

	const nextSlideHandler = () => {
		dispatch(nextSlide());
	};

	const prevSlideHandler = () => {
		dispatch(previousSlide());
	};

	useEffect(() => {
		const interval = setInterval(() => {
			dispatch(nextSlide);
		}, 3000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div className='relative flex w-screen h-[50vh] overflow-x-hidden'>
			{slides.map((slide, index) => (
				<img
					src={slide.src}
					alt={slide.alt}
					key={index}
					className={`grow shrink-0 basis-full object-cover transition-transform duration-300 ${
						currentSlide === 2 && 'second-slide'
					} ${currentSlide === 3 && 'third-slide'}`}
				/>
			))}
			<CarouselBtn id='prev' className='left-4' onClick={prevSlideHandler} />
			<CarouselBtn id='next' className='right-4' onClick={nextSlideHandler} />
		</div>
	);
};

export default MobileCarousel;
