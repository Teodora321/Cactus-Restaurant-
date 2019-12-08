import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import { AuthProvider } from '../user/Auth/AuthContext';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Terms from '../pages-policy/Terms';
import Menu from '../Menu/Menu';
import Details from '../Menu/Details';
import PrivacyPolicy from '../pages-policy/Privacy-policy';
import CookiePolicy from '../pages-policy/Cookie-policy';
import Register from '../user/Register/Register';
import Login from '../user/Login/Login';
import Logout from '../user/Logout/Logout';
import Profile from '../user/Profile/Profile';
import Contacts from '../Contacts/Contacts';
import NotFound from '../NotFound';

class App extends React.Component {
  render() {
    return (
      <div>
        <AuthProvider>
          <Navigation />
          <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/terms' exact component={Terms} />
            <Route path='/privacy' exact component={PrivacyPolicy} />
            <Route path='/cookies' exact component={CookiePolicy} />
            <Route path='/register' exact component={Register} />
            <Route path='/login' exact component={Login} />
            <Route path='/logout' exact component={Logout} />
            <Route path='/profile' exact component={Profile} />
            <Route path='/contacts' exact component={Contacts} />
            <Route path='/menu' exact component={Menu} />
            <Route path="/product/:id" exact component={Details} />
            <Route component={NotFound} />

          </Switch>
          <Footer />
        </AuthProvider>
      </div>
    );
  }
}

export default App;
