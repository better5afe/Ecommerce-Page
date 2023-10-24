import { configureStore } from '@reduxjs/toolkit';
import carouselReducer from './carousel-slice';
import cartReducer from './cart-slice';

export const store = configureStore({
	reducer: {
		carousel: carouselReducer,
		cart: cartReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
