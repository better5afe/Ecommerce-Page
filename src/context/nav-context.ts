import React from 'react';
import { NavContextProps } from '../types/types';

export const NavContext = React.createContext<NavContextProps>({
	isNavOpen: false,
	toggleNav: () => {},
	closeNav: () => {},
	isCartOpen: false,
	toggleCart: () => {},
	closeCart: () => {},
});
