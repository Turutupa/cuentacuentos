import React from 'react';

// IMPORT REACT ROUTER DOM
import { Switch, Route } from 'react-router-dom';

// IMPORT APPLIED ROUTES
import AppliedRoute from './components/AppliedRoute';

// IMPORT COMPONENTS
import Home from './components/home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import CrearCuento from './components/crear-cuento/CrearCuento';
import EditarCuento from './components/editar-cuento/EditarCuento';
import Cuentos from './components/cuentos-tienda/Cuentos';
import CuentoDetalles from './components/cuento-detalles/CuentoDetalles';
import Error from './components/Error';

export default ({ childProps }) =>
    <Switch>
        <AppliedRoute exact path='/' component={Home} props={childProps} />
        <AppliedRoute exact path='/login' component={Login} props={childProps} />
        <AppliedRoute exact path='/signup' component={Signup} props={childProps} />
        <AppliedRoute exact path='/crear-cuento' component={CrearCuento} props={childProps} />
        <AppliedRoute exact path='/cuentos' component={Cuentos} props={childProps} />
        <AppliedRoute exact path='/cuentos/temp' component={CuentoDetalles} props={childProps} />
        <AppliedRoute path='/editar-cuento/:id' component={EditarCuento} props={childProps} />
        <Route component={Error} />
    </Switch>