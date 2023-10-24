import { useContext } from 'react';
import { useAppSelector } from '../../store/typed-hooks';
import { NavContext } from '../../context/nav-context';
import Carousel from '../subcomponents/main-components/Carousel';
import MainProduct from '../subcomponents/main-components/MainProduct';
import MainDescription from '../subcomponents/main-components/MainDescription';
import MainModal from '../subcomponents/main-components/MainModal';

const Main = () => {
	const stateSlide = useAppSelector((state) => state.carousel.slide);

	const navCtx = useContext(NavContext);

	return (
		<div className='container w-screen lg:w-[930px] lg:mx-auto lg:my-16'>
			<main
				className='lg:flex items-center justify-between'
				onClick={() => {
					navCtx.closeCart();
				}}
			>
				<Carousel className='mobile-carousel' />
				<MainProduct currentSlide={stateSlide} />
				<MainDescription />
				<MainModal currentSlide={stateSlide} />
			</main>
		</div>
	);
};

export default Main;
