import React, { Component } from 'react';

// REACT ROUTER DOM
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

// Semantic UI && CSS
import './style/App.css';
import 'semantic-ui-css/semantic.min.css';

import Home from './components/home/Home';
import CrearCuento from './components/crear-cuento/CrearCuento';
import Cuentos from './components/cuentos/Cuentos';
import Error from './components/Error'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/crear-cuento' component={CrearCuento} />
          <Route exact path='/cuentos' component={Cuentos} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
