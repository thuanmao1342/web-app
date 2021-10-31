import * as React from 'react';
import { Container, CssBaseline } from '@mui/material';
import Header from './Header';
import { Route, Switch } from 'react-router';
import Order from '../component/order/Order';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';
import Cart from '../component/cart/Cart';
import Account from '../component/account/Account';
import Home from '../component/home/Home';

function Layout() {
  return (
    <React.Fragment>
      <CssBaseline />
        <Router>
        <Header/>
          <NavBar/>
          <Container maxWidth="xl">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/order" component={Order} />
              <Route path="/cart" component={Cart} />
              <Route path="/acount" component={Account} />
            </Switch>
          </Container>
        </Router>
    </React.Fragment>
  );
}
export default Layout;