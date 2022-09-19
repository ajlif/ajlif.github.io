import { createSlice } from '@reduxjs/toolkit';
import { themes } from '../../shared/interfaces/cv.interfaces';
import { themeState } from '../../shared/interfaces/states.interface';

const initialState: themeState = {
  theme: localStorage.getItem('theme')?? themes.LIGHT,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state) => {
      if(localStorage.getItem('theme') === themes.LIGHT){
        state.theme = themes.DARK;
        localStorage.setItem('theme', themes.DARK);
      }
      else {
        state.theme = themes.LIGHT;
        localStorage.setItem('theme', themes.LIGHT);
      }
    }
  },
});

// Action creators are generated for each case reducer function
export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;