import { createSlice } from '@reduxjs/toolkit';
import { CartStateSlice } from '../types/types';

const storedCart = localStorage.getItem('cart');

const initialState: CartStateSlice = {
	cartItems: storedCart ? JSON.parse(storedCart) : [],
	amount: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		increaseAmount: (state) => {
			if (state.amount === 99) {
				return;
			}

			state.amount++;
		},
		decreaseAmount: (state) => {
			if (state.amount === 0) {
				return;
			}

			state.amount--;
		},
		addToCart: (state, action) => {
			if (state.amount === 0) {
				return;
			}

			const addedProduct = action.payload;

			if (state.cartItems.length === 0) {
				state.cartItems = [addedProduct];
				localStorage.setItem('cart', JSON.stringify([addedProduct]));
				return;
			}

			const foundItem = state.cartItems.find(
				(cartItem) => cartItem.id === addedProduct.id
			);
			const foundItemIndex = state.cartItems.findIndex(
				(cartItem) => cartItem.id === addedProduct.id
			);

			if (foundItem) {
				const updatedItem = {
					...foundItem,
					amount: foundItem.amount + addedProduct.amount,
				};

				state.cartItems[foundItemIndex] = updatedItem;
				localStorage.setItem('cart', JSON.stringify(state.cartItems));
			} else {
				const updatedArray = [...state.cartItems, addedProduct];
				state.cartItems = updatedArray;
				localStorage.setItem('cart', JSON.stringify(updatedArray));
			}
		},
		removeFromCart: (state, action) => {
			const idToDelete = action.payload;
			const updatedArray = state.cartItems.filter(
				(cartItem) => cartItem.id !== idToDelete
			);

			state.cartItems = updatedArray;
			localStorage.setItem('cart', JSON.stringify(updatedArray));
		},
	},
});

export const {
	increaseAmount,
	decreaseAmount,
	addToCart,
	removeFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
