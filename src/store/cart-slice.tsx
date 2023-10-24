import { createSlice } from '@reduxjs/toolkit';
import { CartStateSlice } from '../types/types';

const initialState: CartStateSlice = {
	cartItems: [],
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
			} else {
				const updatedArray = [...state.cartItems, addedProduct];
				state.cartItems = updatedArray;
			}
		},
	},
});

export const { increaseAmount, decreaseAmount, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
