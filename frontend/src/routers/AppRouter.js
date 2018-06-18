import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink, browserHistory } from 'react-router-dom';
// import NotFoundPage from '../components/NotFoundPage';
import HomePage from '../index';
import ProductDetail from '../ProductDetail';
import ProductCatalog from '../ProductCatalog';
import ProductLaptop from '../ProductLaptop';
import Login from '../Login';

const AppRouter = () => (
  <BrowserRouter history={browserHistory}>
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/product/:id" component={ProductDetail} exact={true} />
        <Route path="/catalog/dien-thoai" component={ProductCatalog} exact={true} />
        <Route path="/catalog/laptop" component={ProductLaptop} exact={true} />
        <Route path="/login" component={Login} exact={true} />
        {/* <Route component={NotFoundPage} /> */}
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
