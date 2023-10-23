import { useEffect } from 'react';
import { useAppSelector } from '../../../store/typed-hooks';
import { useDispatch } from 'react-redux';
import { previousSlide, nextSlide } from '../../../store/carousel-slice';
import { CarouselProps } from 'react-bootstrap';
import { slides } from '../../../utils/slides';
import CarouselBtn from '../../reusable/CarouselBtn';

const Carousel: React.FC<CarouselProps> = ({ className }) => {
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
		<div
			className={`${className} relative flex w-screen h-[50vh] overflow-x-hidden`}
		>
			{slides.map((slide, index) => (
				<img
					src={slide.src}
					alt={slide.alt}
					key={index}
					className={`
					${currentSlide === 2 && 'second-slide'} ${
						currentSlide === 3 && 'third-slide'
					} grow shrink-0 basis-full object-cover transition-transform duration-300`}
				/>
			))}
			<CarouselBtn id='prev' className='left-4' onClick={prevSlideHandler} />
			<CarouselBtn id='next' className='right-4' onClick={nextSlideHandler} />
		</div>
	);
};

export default Carousel;
