import * as React from 'react';
import './App.scss';
import {Route} from 'react-router';
import Layout from './components/Layout';
import MyCv from './components/myCv';
import NotFoundComponent from './shared/components/NotFoundComponent'

const App = () => (
  <Layout>
      <Route exact path='/background' component={undefined} />
      <Route exact path='/cv' component={MyCv} />
      <Route exact path='/trips' component={undefined} />
      <Route exact path='/pictures' component={undefined} />
      <Route component={NotFoundComponent} />
  </Layout>
);

export default App;
