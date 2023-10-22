import MobileCarouselSlide from './MobileCarouselSlide';
import CarouselBtn from '../../reusable/CarouselBtn';

const MobileCarousel = () => {
	return (
		<div className='relative w-full h-60 z-10' >
			<MobileCarouselSlide id='1' className='one bg-red-300' />
			<MobileCarouselSlide id='2' className='two bg-blue-300' />
			<MobileCarouselSlide id='3' className='three bg-yellow-300' />
			<CarouselBtn
				id='prev'
				className='left-4'
				onClick={() => {
					console.log('prev');
				}}
			/>
			<CarouselBtn
				id='next'
				className='right-4'
				onClick={() => {
					console.log('next');
				}}
			/>
		</div>
	);
};

export default MobileCarousel;
