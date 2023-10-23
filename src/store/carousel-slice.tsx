import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	slide: 1,
};

const carouselSlice = createSlice({
	name: 'carousel',
	initialState,
	reducers: {
		nextSlide: (state) => {
			state.slide >= 4 ? (state.slide = 1) : state.slide++;
		},
		previousSlide: (state) => {
			state.slide === 1 ? (state.slide = 4) : state.slide--;
		},
	},
});

export const { nextSlide, previousSlide } = carouselSlice.actions;
export default carouselSlice.reducer;
