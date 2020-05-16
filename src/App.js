import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInndSignUpPage from './pages/sign-in-and-up/sign-in-and-up,component';
import { auth , createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

const HatsPage =()=>(
  <div>
    <h1>hats page</h1>
  </div>
)
class App extends React.Component {


//this handles the oauth from firebase 
unsubscribeFromAuth = null

componentDidMount(){

  const {setCurrentUser} = this.props;

  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot =>{
        setCurrentUser({
            id: snapShot.id,
              ...snapShot.data()
          });
      });
    }
      setCurrentUser(userAuth);
  })
}
//closes auth subscription
componentWillUnmount(){
  this.unsubscribeFromAuth();
}


  render(){
    return (
      <div>
        <Header />
        <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/shop/hats' component={HatsPage} />
        <Route exact path='/signin' render={() => this.props.currentUser ?
           (<Redirect to='/' /> ) 
           : 
           (<SignInndSignUpPage />) } 
        />
        </Switch>
      </div>
    );
  }
  
  
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser 
})


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

