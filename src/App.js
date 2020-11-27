import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import Home from './containers/Home';
import Vendors from './views/User/Vendor/vendor'
import Venue from './views/User/Venue/Venue'
import booking from './views/User/Venue/booking'
import StaticVendor from './views/User/Vendor/StaticVendor';
import StaticDetailPage from './views/User/Venue/StaticDetailPage';
import bookingvendor from './views/User/Vendor/bookingvendor';
import AddVenue from './views/User/Vendor/AddVenue';
import Venuelist from './views/User/Vendor/Venuelist';
import UserLogin from './views/User/Login';
import CustomerLogin from './views/Customer/Login';
import UserSignUp from './views/User/Signup';
import CustomerSignUp from './views/Customer/Signup';
import Events from './views/User/events';
import Profile from './views/User/profile';
import Bookinguser from './views/User/Booking';
import VendorDashboard from './views/Customer/VendorDashboard/VendorDashboard'
import UpdateProfile from './views/User/updateProfile';
import AdminDashboard from './views/admin/AdminDashboard';
import AdminLogin from './views/admin/Login';
import VenueAdmin from './views/admin/venue';
import User from './views/admin/user';
import Customer from './views/admin/customer';
import Booking from './views/admin/booking';

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/" name="Home" component={Home}/>
            <Route  path="/user/vendor" name="Vendors" component={Vendors} /> 
            <Route  path="/user/venue" name="Venue" component={Venue} /> 
            <Route  path="/user/staticvendor/:id" name="StaticVendor" component={StaticVendor} /> 
            <Route  path="/user/StaticDetailPage/:id" name="StaticDetailPage" component={StaticDetailPage} />  
            <Route  path="/user/AddVenue" name="AddVenue" component={AddVenue} />
            <Route  path="/user/venuelist" name="Venuelist" component={Venuelist} />  
            <Route  path="/user/login" name="User Login" component={UserLogin} />
            <Route  path="/admin/login" name="User Login" component={AdminLogin} />
            <Route exact path="/Admindashboard" name="User Login" component={AdminDashboard} />
            <Route  path="/Admindashboard/venue" name="User Login" component={VenueAdmin} />
            <Route  path="/Admindashboard/user" name="User Login" component={User} />
            <Route  path="/Admindashboard/customer" name="User Login" component={Customer} />
            <Route  path="/Admindashboard/booking" name="User Login" component={Booking} />
            <Route  path="/customer/login" name="Customer Login" component={CustomerLogin} />
            <Route  path="/user/signup" name="User Login" component={UserSignUp} />
            <Route  path="/user/events" name="User events" component={Events} />
            <Route  path="/user/booking/:id" name="booking" component={booking} />
            <Route exact path="/user/bookingvendor/:id" name="bookingvendor" component={bookingvendor} />
            <Route  path="/user/profile" name="User profile" component={Profile} />
             <Route  path="/user/Bookinguser" name="Bookinguser" component={Bookinguser} />
            <Route  path="/user/edit" name="Update profile" component={UpdateProfile} />
            <Route  path="/vendordashboard" name="VendorDashboard" component={VendorDashboard} />
            <Route  path="/customer/signup" name="Customer Login" component={CustomerSignUp} />
          </Switch>
      </Router>    
           
    );
  }
}

export default App;