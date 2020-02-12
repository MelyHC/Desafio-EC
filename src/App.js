import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <Router>
      <Switch>
        <Route path='/' exac render={} />
        <Route path='/suscripcion' exac render={} />
        <Route path='/datos' exac render={} />
        <Route path='/confirmcaion' exac render={} />
      </Switch>
    </Router>
  );
  }
}

export default App;
