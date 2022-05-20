import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {getSkills as getSkillsService} from '../../services/cv.service';
import { skillsState } from '../../shared/interfaces/states.interface';

const initialState: skillsState = {
  content: [],
  status: ''
};

export const getSkills = createAsyncThunk(
  'getSkills',
  async () => {
    const res = await getSkillsService();
    return res;
  }
);

export const getSkillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getSkills.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getSkills.fulfilled, (state, action) => {
        state.status = 'fulfilled'; 
        state.content = action.payload;
      })
      .addCase(getSkills.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default getSkillsSlice.reducer;
