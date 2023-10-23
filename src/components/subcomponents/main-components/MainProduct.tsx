import { useAppSelector } from '../../../store/typed-hooks';
import { slides } from '../../../utils/slides';

const MainProduct = () => {
	const stateSlide = useAppSelector((state) => state.carousel.slide);

	return (
		<div
			className='hidden h-96 w-96 bg-center bg-no-repeat bg-cover border-2 border-transparent rounded-xl outline-none cursor-pointer transition-colors duration-300 hover:border-2 hover:border-orange focus:border-2 focus:border-orange lg:block'
			style={{ backgroundImage: `url(${slides[stateSlide - 1].src})` }}
			tabIndex={0}
			onClick={() => console.log('open carousel')}
		></div>
	);
};

export default MainProduct;
