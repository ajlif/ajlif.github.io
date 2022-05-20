import {useEffect, createContext} from 'react';
import './styles/App.scss';
import { Route, Switch } from 'react-router';
import Layout from './components/Layout';
import MyCv from './components/myCv';
import NotFoundComponent from './shared/components/NotFoundComponent';
import UnderConstruction from './shared/components/UnderConstruction';
import { useState } from 'react';
import { useAppDispatch } from './store/setup/hooks';
import { getProfileInfo } from './store/slices/profileSlice';
import { getExperiences } from './store/slices/experiencesSlice';
import { getEducations } from './store/slices/educationsSlice';


export const App = (): JSX.Element => {

  const [theme, setTheme] = useState('light');
  const value = { theme, setTheme };

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProfileInfo());
    dispatch(getExperiences());
    dispatch(getEducations());
  }, []);

  return (
    <ThemeContext.Provider value={value}>
      <Layout>
        <Switch>
          <Route exact path='/' component={MyCv} />
          <Route exact path='/cv' component={MyCv} />
          <Route exact path='/trips' component={UnderConstruction} />
          <Route exact path='/projects' component={UnderConstruction} />
          <Route exact path='/frontendtips' component={UnderConstruction} />
          <Route exact path='/pictures' component={UnderConstruction} />
          <Route path='/*' component={NotFoundComponent} />
        </Switch>
      </Layout>
    </ThemeContext.Provider>
  );
};


const themes = {
  theme: 'light',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setTheme: (theme: string) => {
    // update theme
  }
};
export const ThemeContext = createContext(themes);
