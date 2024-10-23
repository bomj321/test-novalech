import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axiosconf from '../axios';
import ProtectedRoute from '../components/ProtectedRoute';
import Template from '../components/Template';
import Login from '../containers/Login';
import Employee from '../containers/Employee';
import Evaluation from '../containers/Evaluation';

const App = () => {
  axiosconf();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Login />} />
        <Template>
          <ProtectedRoute
            path="/employees"
            component={Employee}
            roles={['ADMIN']}
          />

          <ProtectedRoute
            path="/evaluations"
            component={Evaluation}
            roles={['ADMIN']}
          />
        </Template>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
