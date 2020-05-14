import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInndSignUpPage from './pages/sign-in-and-up/sign-in-and-up,component';
import { auth } from './firebase/firebase.utils';

const HatsPage =()=>(
  <div>
    <h1>hats page</h1>
  </div>
)
class App extends React.Component {
constructor(){
  super();

  this.state = {
    currentUser: null
  }
}
//this handles the oauth from firebase 
unsubscribeFromAuth = null

componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    this.setState({ currentUser: user});
  })
}
//closes auth subscription
componentWillUnmount(){
  this.unsubscribeFromAuth();
}


  render(){
    return (
      <div>
        <Header currentUser={ this.state.currentUser} />
        <switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/shop/hats' component={HatsPage} />
        <Route path='/signin' component={SignInndSignUpPage} />
        </switch>
      </div>
    );
  }
  
  
}

export default App;
