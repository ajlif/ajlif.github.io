import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {getExperiences as getExperiencesService} from '../../services/cv.service';
import { ExperiencesState } from '../../shared/interfaces/states.interface';
import siemens from '../../shared/images/siemens.jpg';
import otConsulting from '../../shared/images/otConsulting.jpeg';
import credem from '../../shared/images/credem.png';
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
            case experience?.company?.toLowerCase().includes('siemens'):
              return (experience.companyLogo = siemens);
            case experience?.company?.toLowerCase().includes('ot'):
              return (experience.companyLogo = otConsulting);
            case experience?.company?.toLowerCase().includes('credem'):
              return (experience.companyLogo = credem);
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
