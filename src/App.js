import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import Home from './containers/Home';
import UserLogin from './views/User/Login';
import CustomerLogin from './views/Customer/Login';
import UserSignUp from './views/User/Signup';
import CustomerSignUp from './views/Customer/Signup';
import Events from './views/User/events';
import Profile from './views/User/profile';
import Venues from './views/venues';
import Vendors from './views/vendors';
class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/" name="Home" component={Home}/>
            <Route  path="/user/login" name="User Login" component={UserLogin} />
            <Route  path="/customer/login" name="Customer Login" component={CustomerLogin} />
            <Route  path="/user/signup" name="User Login" component={UserSignUp} />
            <Route  path="/user/events" name="User events" component={Events} />
            <Route  path="/user/profile" name="User profile" component={Profile} />
            <Route  path="/vendors" name="Vendors" component={Vendors} />
            <Route  path="/venues" name="Venues" component={Venues} />
            <Route  path="/customer/signup" name="Customer Login" component={CustomerSignUp} />
          </Switch>
      </Router>    
           
    );
  }
}

export default App;