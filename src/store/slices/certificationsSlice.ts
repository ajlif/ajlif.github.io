import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../setup/store';
import {getCertifications as getCertificationsService} from '../../services/cv.service';
import { CertificationsState } from '../../shared/interfaces/states.interface';
import { Certification as CertificationType} from '../../shared/interfaces/cv.interfaces';
import britsh from '../../shared/images/britsh.png';
import institutfr from '../../shared/images/institutfr.png';
import uniprg from '../../shared/images/uniprg.jpg';

const initialState: CertificationsState = {
  content: [],
  status: ''
};

export const getCertifications = createAsyncThunk(
  'getCertifications',
  async () => {
    const res = await getCertificationsService();
    return res;
  }
);

export const getCertificationsSlice = createSlice({
  name: 'certifications',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getCertifications.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCertifications.fulfilled, (state, action) => {
        const response = action.payload;
        response.map((certif: CertificationType) => {
          switch (true) {
            case certif?.name?.toLowerCase().includes('ielts'):
              return (certif.organizationLogo = britsh);
            case certif?.name?.toLowerCase().includes('tcf'):
              return (certif.organizationLogo = institutfr);
            case certif?.name?.toLowerCase().includes('celi'):
              return (certif.organizationLogo = uniprg);
            default:
              return '';
          }
        });
        state.status = 'fulfilled';
        state.content = response;
      })
      .addCase(getCertifications.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default getCertificationsSlice.reducer;

export const selectCertifications = (state: RootState): CertificationsState => state.certifications ;
