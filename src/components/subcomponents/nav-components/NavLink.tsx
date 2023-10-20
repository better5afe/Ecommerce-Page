import { NavLinkProps } from '../../../types/types';

const NavLink: React.FC<NavLinkProps> = ({ text }) => {
	return (
		<li className='mb-5 font-bold lg:relative lg:mb-0 lg:mr-6'>
			<a
				href='#'
				className='nav-link lg:text-sm lg:text-darkGrayishBlue lg:font-normal lg:transition-colors lg:duration-300 lg:hover:text-black lg:focus:text-black'
			>
				{text}
			</a>
		</li>
	);
};

export default NavLink;
