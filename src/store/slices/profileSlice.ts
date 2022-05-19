import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../setup/store';
import {getProfileInformations} from '../../services/cv.service';
import { ProfilePresentation } from '../../shared/interfaces/states.interface';

const initialState: ProfilePresentation = {
  content: '',
  status: ''
};

export const getProfileInfo = createAsyncThunk(
  'getProfileInformations',
  async () => {
    const res = await getProfileInformations();
    return res;
  }
);

export const profInformationsSlice = createSlice({
  name: 'profInformations',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getProfileInfo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProfileInfo.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.content = action.payload;
      })
      .addCase(getProfileInfo.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default profInformationsSlice.reducer;

export const selectProfileInf = (state: RootState): ProfilePresentation => state.personalInfo ;
