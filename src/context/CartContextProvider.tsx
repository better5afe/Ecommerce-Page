import { useState } from 'react';
import { CartContext } from './cart-context';
import { ProviderProps } from '../types/types';

export const CartContextProvider: React.FC<ProviderProps> = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);

	const toggleCartHandler = () => {
		setIsCartOpen((prev) => {
			return !prev;
		});
	};

	const closeCartHandler = () => {
		setIsCartOpen(false);
	};

	return (
		<CartContext.Provider
			value={{
				isOpen: isCartOpen,
				toggleCart: toggleCartHandler,
				closeCart: closeCartHandler,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
