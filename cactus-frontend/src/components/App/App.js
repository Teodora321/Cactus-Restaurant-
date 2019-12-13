import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import { UserProvider } from '../Auth/UserContext';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Success from '../Cart/Success';
import Terms from '../pages-policy/Terms';
import Menu from '../Menu/Menu';
import Details from '../Menu/Details';
import PrivacyPolicy from '../pages-policy/Privacy-policy';
import CookiePolicy from '../pages-policy/Cookie-policy';
import Register from '../user/Register/Register';
import Login from '../user/Login/Login';
import Logout from '../user/Logout/Logout';
import Profile1 from '../user/Profile/Profile1';
import Cart from '../Cart/Cart';
import Contacts from '../Contacts/Contacts';
import NotFound from '../NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';


function App() {

  return (
    <div>
      <UserProvider>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/terms' exact component={Terms} />
          <ProtectedRoute path='/profile' exact component={Profile1} />
          <Route path='/privacy' exact component={PrivacyPolicy} />
          <Route path='/cookies' exact component={CookiePolicy} />
          <Route path='/register' exact component={Register} />
          <Route path='/login' exact component={Login} />
          <ProtectedRoute path='/logout' exact component={Logout} />
          <ProtectedRoute path='/cart' exact component={Cart} />
          <ProtectedRoute path='/success' exact component={Success} />
          <Route path='/contacts' exact component={Contacts} />
          <Route path='/items' exact component={Menu} />
          <Route path="/items/:id" exact component={Details} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </UserProvider>
    </div>
  )
}


export default App;
