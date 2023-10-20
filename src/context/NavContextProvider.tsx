import { useState } from 'react';
import { NavContext } from './nav-context';
import { ProviderProps } from '../types/types';

export const NavContextProvider: React.FC<ProviderProps> = ({ children }) => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [isCartOpen, setIsCartOpen] = useState(false);

	const toggleNavHandler = () => {
		setIsNavOpen((prevState) => {
			return !prevState;
		});
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
				toggleNav: toggleNavHandler,
				closeNav: closeNavHandler,
				isCartOpen: isCartOpen,
				toggleCart: toggleCartHandler,
				closeCart: closeCartHandler
			}}
		>
			{children}
		</NavContext.Provider>
	);
};
