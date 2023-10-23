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
		selectSlide: (state, action) => {
			state.slide = action.payload;
		},
	},
});

export const { nextSlide, previousSlide, selectSlide } = carouselSlice.actions;
export default carouselSlice.reducer;
