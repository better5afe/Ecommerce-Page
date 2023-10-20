import { useContext } from 'react';
import { NavContext } from '../../../context/nav-context';
import IconBars from '../../../assets/icons/IconBars';
import IconClose from '../../../assets/icons/IconClose';

const NavBtn = () => {
	const navCtx = useContext(NavContext);

	return (
		<button onClick={navCtx.toggleNav}>
			<IconBars className={`${navCtx.isOpen && 'hidden'}`} />
			<IconClose className={`${!navCtx.isOpen && 'hidden'}`} />
		</button>
	);
};

export default NavBtn;
