import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInndSignUpPage from './pages/sign-in-and-up/sign-in-and-up,component'

const HatsPage =()=>(
  <div>
    <h1>hats page</h1>
  </div>
)
function App() {
  return (
    <div>
      <Header />
      <switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/shop/hats' component={HatsPage} />
      <Route path='/signin' component={SignInndSignUpPage} />
      </switch>
    </div>
  );
}

export default App;
