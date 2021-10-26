import * as React from 'react';
//import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router';
import Layout from './components/Layout';
import MyCv from './components/myCv';

const App = () => (
  <Layout>
      <Route exact path='/' component={MyCv} />
  </Layout>
);

export default App;
