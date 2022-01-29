import * as React from 'react';
import './App.scss';
import {Route, Redirect} from 'react-router';
import Layout from './components/Layout';
import MyCv from './components/myCv';
import NotFoundComponent from './shared/components/NotFoundComponent';
import UnderConstruction from './shared/components/UnderConstruction';

const App = () => (
  <Layout>
      <Route exact path='/background' component={UnderConstruction} />
      <Route exact path='/cv' component={MyCv} />
      <Route exact path='/trips' component={UnderConstruction} />
      <Route exact path='/pictures' component={UnderConstruction} />
      <Route path='/404' component={NotFoundComponent} />
      <Redirect from='*' to='/404' />
  </Layout>
);

export default App;
