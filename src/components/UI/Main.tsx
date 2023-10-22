import { useContext } from 'react';
import { NavContext } from '../../context/nav-context';

const Main = () => {
	const navCtx = useContext(NavContext);

	return (
		<main
			onClick={() => {
				navCtx.closeCart();
			}}
		>
		</main>
	);
};

export default Main;
