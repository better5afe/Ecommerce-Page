import { useState, useEffect } from 'react';
import { slides } from '../../../utils/slides';
import CarouselBtn from '../../reusable/CarouselBtn';

const MobileCarousel = () => {
	const [currentSlide, setCurrentSlide] = useState(1);

	const nextSlide = () => {
		if (currentSlide >= 3) {
			setCurrentSlide(1);
		} else {
			setCurrentSlide((prevState) => {
				return prevState + 1;
			});
		}
	};

	const prevSlide = () => {
		if (currentSlide === 1) {
			setCurrentSlide(3);
		} else {
			setCurrentSlide((prevState) => {
				return prevState - 1;
			});
		}
	};

	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide();
		}, 3000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div className='relative flex w-screen h-auto overflow-x-hidden'>
			{slides.map((slide, index) => (
				<img
					src={slide.src}
					alt={slide.alt}
					key={index}
					className={`grow shrink-0 basis-full transition-transform duration-300 ${
						currentSlide === 2 && 'second-slide'
					} ${currentSlide === 3 && 'third-slide'}`}
				/>
			))}
			<CarouselBtn id='prev' className='left-4' onClick={prevSlide} />
			<CarouselBtn id='next' className='right-4' onClick={nextSlide} />
		</div>
	);
};

export default MobileCarousel;
