import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/homepage.component';

const HatsPage =()=>(
  <div>
    <h1>hats page</h1>
  </div>
)
function App() {
  return (
    <div>
      <switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop/hats' component={HatsPage} />
      </switch>
    </div>
  );
}

export default App;
