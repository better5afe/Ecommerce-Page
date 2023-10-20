import { useState } from 'react';
import { NavContext } from './nav-context';
import { ProviderProps } from '../types/types';

export const NavContextProvider: React.FC<ProviderProps> = ({ children }) => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleNavHandler = () => {
		setIsNavOpen((prevState) => {
			return !prevState;
		});
	};

	const closeNavHandler = () => {
		setIsNavOpen(false);
	};

	return (
		<NavContext.Provider
			value={{
				isOpen: isNavOpen,
				toggleNav: toggleNavHandler,
				closeNav: closeNavHandler,
			}}
		>
			{children}
		</NavContext.Provider>
	);
};
