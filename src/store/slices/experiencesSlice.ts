import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {getExperiences as getExperiencesService} from '../../services/cv.service';
import { ExperiencesState } from '../../shared/interfaces/states.interface';
import alten from '../../shared/images/alten.png';
import bgiTunis from '../../shared/images/bgiTunis.jpg';
import otConsulting from '../../shared/images/otConsulting.jpeg';
import { Experience } from '../../shared/interfaces/cv.interfaces';

const initialState: ExperiencesState = {
  content: [],
  status: ''
};

export const getExperiences = createAsyncThunk(
  'getExperiences',
  async () => {
    const res = await getExperiencesService();
    return res;
  }
);

export const getExperiencesSlice = createSlice({
  name: 'experiences',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getExperiences.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getExperiences.fulfilled, (state, action) => {
        const response = action.payload;
        response.map((experience: Experience) => {
          switch (true) {
            case experience?.company?.toLowerCase().includes('alten'):
              return (experience.companyLogo = alten);
            case experience?.company?.toLowerCase().includes('bgi'):
              return (experience.companyLogo = bgiTunis);
            case experience?.company?.toLowerCase().includes('ot'):
              return (experience.companyLogo = otConsulting);
            default:
              return '';
          }
        });
        state.status = 'fulfilled';
        state.content = response;
      })
      .addCase(getExperiences.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default getExperiencesSlice.reducer;
