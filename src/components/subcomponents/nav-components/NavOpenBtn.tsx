import { useContext } from 'react';
import { NavContext } from '../../../context/nav-context';
import IconBars from '../../../assets/icons/IconBars';

const NavOpenBtn = () => {
	const navCtx = useContext(NavContext);

	return (
		<button
			onClick={navCtx.openNav}
			className='open-nav me-4 outline-none lg:hidden'
		>
			<IconBars />
		</button>
	);
};

export default NavOpenBtn;
