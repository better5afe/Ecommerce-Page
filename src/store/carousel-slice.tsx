import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	slide: 1,
};

const carouselSlice = createSlice({
	name: 'carousel',
	initialState,
	reducers: {
		nextSlide: (state) => {
			state.slide >= 3 ? (state.slide = 0) : state.slide++;
		},
		previousSlide: (state) => {
			state.slide === 0 ? (state.slide = 3) : state.slide--;
		},
	},
});

export const { nextSlide, previousSlide } = carouselSlice.actions;
export default carouselSlice.reducer;
