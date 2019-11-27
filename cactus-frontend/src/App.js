import React from 'react';
import './App.css';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Terms from './pages-policy/Terms';
import PrivacyPolicy from './pages-policy/Privacy-policy';
import CookiePolicy from './pages-policy/Cookie-policy';


class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/terms'  component={Terms} />
          <Route path='/privacy' exact component={PrivacyPolicy} />
          <Route path='/cookies' exact component={CookiePolicy} />
        </Switch>
       
        <Footer />
      </div>
    );
  }
}
  
  export default App;
