import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Terms from '../pages-policy/Terms';
import Menu from '../Menu/Menu';
import PrivacyPolicy from '../pages-policy/Privacy-policy';
import CookiePolicy from '../pages-policy/Cookie-policy';
import Register from '../user/Register/Register';
import Login from '../user/Login/Login';
import Logout from '../user/Logout/Logout'
import Contacts from '../Contacts/Contacts';
import NotFound from '../NotFound';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/terms' component={Terms} />
          <Route path='/privacy' component={PrivacyPolicy} />
          <Route path='/cookies' component={CookiePolicy} />
          <Route path='/register' exact component={Register} />
          <Route path='/login' exact component={Login} />
          <Route path='/logout' exact component={Logout} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/menu' component={Menu} />
          <Route component={NotFound} />

        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
