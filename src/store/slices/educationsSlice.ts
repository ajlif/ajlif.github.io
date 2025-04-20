import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {getEducation as getEducationsService} from '../../services/cv.service';
import { EducationState } from '../../shared/interfaces/states.interface';
import unimore from '../../shared/images/unimore.jpg';
import fsb from '../../shared/images/fsb.jpg';
import { Education as EducationType} from '../../shared/interfaces/cv.interfaces';

const initialState: EducationState = {
  content: [],
  status: ''
};

export const getEducations = createAsyncThunk(
  'getEducations',
  async () => {
    const res = await getEducationsService();
    return res;
  }
);

export const getEducationsSlice = createSlice({
  name: 'educations',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getEducations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getEducations.fulfilled, (state, action) => {
        const response = action.payload;
        response.map((education: EducationType) => {
          switch (true) {
            case education?.university?.toLowerCase().includes('modena'):
              return (education.uniLogo = unimore);
            case education?.university?.toLowerCase().includes('bizerte'):
              return (education.uniLogo = fsb);
            default:
              return '';
          }
        });
        state.status = 'fulfilled';
        state.content = response;
      })
      .addCase(getEducations.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default getEducationsSlice.reducer;
