import { useState } from 'react';
import { NavContext } from './nav-context';
import { ProviderProps } from '../types/types';

export const NavContextProvider: React.FC<ProviderProps> = ({ children }) => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [isCartOpen, setIsCartOpen] = useState(false);

	const openNavHandler = () => {
		setIsNavOpen(true);
	};

	const closeNavHandler = () => {
		setIsNavOpen(false);
	};

	const toggleCartHandler = () => {
		setIsCartOpen((prevState) => {
			return !prevState;
		});
	};

	const closeCartHandler = () => {
		setIsCartOpen(false);
	};

	return (
		<NavContext.Provider
			value={{
				isNavOpen: isNavOpen,
				openNav: openNavHandler,
				closeNav: closeNavHandler,
				isCartOpen: isCartOpen,
				toggleCart: toggleCartHandler,
				closeCart: closeCartHandler,
			}}
		>
			{children}
		</NavContext.Provider>
	);
};
