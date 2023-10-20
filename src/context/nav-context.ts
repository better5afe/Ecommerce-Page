import React from 'react';
import { NavContextProps } from '../types/types';

export const NavContext = React.createContext<NavContextProps>({
	isOpen: false,
	toggleNav: () => {},
	closeNav: () => {},
});
