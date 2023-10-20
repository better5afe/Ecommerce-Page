import React from 'react';
import { CartContextProps } from '../types/types';

export const CartContext = React.createContext<CartContextProps>({
    isOpen: false,
    toggleCart: () => { },
    closeCart: () => {}
})
