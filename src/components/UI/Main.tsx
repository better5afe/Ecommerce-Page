import { useContext } from 'react';
import { NavContext } from '../../context/nav-context';
import Carousel from '../subcomponents/main-components/Carousel';
import MainProduct from '../subcomponents/main-components/MainProduct';
import MainDescription from '../subcomponents/main-components/MainDescription';

const Main = () => {
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
				<MainProduct />
				<MainDescription />
			</main>
		</div>
	);
};

export default Main;
