import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import  profInformations from '../slices/profileSlice';
import  experiences from '../slices/experiencesSlice';
import  educations from '../slices/educationsSlice';
import  certifications from '../slices/certificationsSlice';

export const store = configureStore({
  reducer: {
    personalInfo: profInformations,
    experiences,
    educations,
    certifications
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
