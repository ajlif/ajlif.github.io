import { scrollState, themeState } from '../../shared/interfaces/states.interface';
import { RootState } from '../setup/store';

export const selectTheme = (state: RootState): themeState => state.theme ;
export const selectScroll = (state: RootState): scrollState => state.scroll ;
