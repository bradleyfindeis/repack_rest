import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import NoMatch from './components/NoMatch';
import { Switch } from 'react-router-dom';
import NavBar from './components/Navbar';
import Dish from './components/Dish';

const App = () => (
  <div>
    <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
        <Route path="/menu/:id" component={Menu} />
        <Route component={NoMatch} />
      </Switch>
  </div>
);

export default App;
