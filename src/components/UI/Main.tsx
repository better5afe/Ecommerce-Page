import { useContext } from 'react';
import { NavContext } from '../../context/nav-context';
import Carousel from '../subcomponents/main-components/Carousel';
import MainDescription from '../subcomponents/main-components/MainDescription';

const Main = () => {
	const navCtx = useContext(NavContext);

	return (
		<div className='container w-screen lg:w-[992px] lg:mx-auto'>
			<main
				onClick={() => {
					navCtx.closeCart();
				}}
			>
				<Carousel className='mobile-carousel' />
				<MainDescription />
			</main>
		</div>
	);
};

export default Main;
