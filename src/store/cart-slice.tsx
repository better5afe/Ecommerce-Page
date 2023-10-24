import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
	},
});

export const { increaseAmount, decreaseAmount } = cartSlice.actions;
export default cartSlice.reducer;
