import { createSlice } from '@reduxjs/toolkit';
import { scrollState } from '../../shared/interfaces/states.interface';

const initialState: scrollState = {
  y: window.scrollY,
  x: window.scrollX,
  isScrollingDown: window.scrollY > 20,
};

export const scrollSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    isScrollingDown: (state) => {
      (state.y = window.scrollY),
      (state.x = window.scrollX),
      (state.isScrollingDown = window.scrollY > 20);
    },
    scrollUp: () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { isScrollingDown, scrollUp } = scrollSlice.actions;

export default scrollSlice.reducer;
