import { NavLinkProps } from '../../../types/types';

const NavLink: React.FC<NavLinkProps> = ({ text }) => {
	return (
		<li className='mb-5 font-bold'>
			<a href='#'>{text}</a>
		</li>
	);
};

export default NavLink;
