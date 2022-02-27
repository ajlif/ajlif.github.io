import * as React from 'react';
import './App.scss';
import {Route, Switch} from 'react-router';
import Layout from './components/Layout';
import MyCv from './components/myCv';
import NotFoundComponent from './shared/components/NotFoundComponent';
import UnderConstruction from './shared/components/UnderConstruction';
import { useState } from 'react';


const themes = {
  theme: 'light',
  setTheme: (theme:string) => {}
};

export const ThemeContext = React.createContext(themes);


export const App = () => {
  
const [theme, setTheme] = useState('light');
const value = { theme, setTheme };
  
  return(
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
);}
