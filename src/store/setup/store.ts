import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import  profInformations from '../slices/serviceSlice';

export const store = configureStore({
  reducer: {
    personalInfo: profInformations,
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
