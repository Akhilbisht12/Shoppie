import React, {useState} from 'react';
import OnBoarding from './Routes/OnBoarding/OnBoarding';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from './Routes/Home/Home';
import SingleProduct from './Routes/SingleProduct/SingleProduct';
import Profile from './Routes/Profile/Profile';
import Cart from './Routes/Cart/Cart';
import Dashboard from './Routes/Dashboard/Dashboard';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(true)

  return (
        <Router>
            <Switch>
                <Route exact path='/'>
                  {loggedIn ?<Home/>:<Redirect to='/login'/>}
                </Route>
                <Route exact path='/login' component={OnBoarding}/>
                <Route exact path='/singleProduct' component={SingleProduct}/>
                <Route exact path='/profile' component={Profile}/>
                <Route exact path='/cart' component={Cart}/>
                <Route exact path='/dashboard' component={Dashboard}/>
            </Switch>
        </Router>
  );
}
