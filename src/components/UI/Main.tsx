import { useContext } from 'react';
import { NavContext } from '../../context/nav-context';
import MobileCarousel from '../subcomponents/main-components/MobileCarousel';

const Main = () => {
	const navCtx = useContext(NavContext);

	return (
		<div className='container mx-auto'>
			<main
				onClick={() => {
					navCtx.closeCart();
				}}
			>
				<MobileCarousel />
			</main>
		</div>
	);
};

export default Main;
