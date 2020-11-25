import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import Home from './containers/Home';
import Vendors from './views/User/Vendor/vendor'
import Venue from './views/User/Venue/Venue'
import StaticDetailPage from './views/User/Vendor/StaticDetailPage';
import UserLogin from './views/User/Login';
import CustomerLogin from './views/Customer/Login';
import UserSignUp from './views/User/Signup';
import CustomerSignUp from './views/Customer/Signup';
import Events from './views/User/events';
import Profile from './views/User/profile';
import VendorDashboard from './views/Customer/VendorDashboard/VendorDashboard'
import UpdateProfile from './views/User/updateProfile';
import AdminDashboard from './views/admin/AdminDashboard';
import AdminLogin from './views/admin/Login';

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/" name="Home" component={Home}/>
            <Route  path="/user/vendor" name="Vendors" component={Vendors} /> 
            <Route  path="/user/venue" name="Venue" component={Venue} /> 
            <Route  path="/user/staticdetailPage" name="StaticDetailPage" component={StaticDetailPage} />  
            <Route  path="/user/login" name="User Login" component={UserLogin} />
            <Route  path="/admin/login" name="User Login" component={AdminLogin} />
            <Route  path="/Admindashboard" name="User Login" component={AdminDashboard} />
            <Route  path="/customer/login" name="Customer Login" component={CustomerLogin} />
            <Route  path="/user/signup" name="User Login" component={UserSignUp} />
            <Route  path="/user/events" name="User events" component={Events} />
            <Route  path="/user/profile" name="User profile" component={Profile} />
            <Route  path="/user/edit" name="Update profile" component={UpdateProfile} />
            <Route  path="/vendordashboard" name="VendorDashboard" component={VendorDashboard} />
            <Route  path="/customer/signup" name="Customer Login" component={CustomerSignUp} />
          </Switch>
      </Router>    
           
    );
  }
}

export default App;