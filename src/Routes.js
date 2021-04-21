import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './Pages/Main/Main';
// import Signup from './Pages/Signup/Signup';
// import Signupfin from './Pages/Signup/SignupFin/SignupFin';
// import Login from './Pages/Login/Login';
// import ProductList from './Pages/ProductList/ProductList';
// import ProductDetails from './Pages/ProductDetails/ProductDetails';
// import Cart from './Pages/Cart/Cart';

import './Styles/common.scss';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/main/md/:id" component={Main} />
          {/* <Route exact path="/signup" component={Signup} /> */}
          {/* <Route exact path="/signupfin" component={Signupfin} /> */}
          {/* <Route exact path="/login" component={Login} />
          <Route exact path="/productlist" component={ProductList} />
          <Route exact path="/productlist/:id" component={ProductList} />
          <Route exact path="/productdetails" component={ProductDetails} />
          <Route exact path="/cart" component={Cart} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
