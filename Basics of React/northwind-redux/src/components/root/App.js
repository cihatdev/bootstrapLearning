import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import CartDetail from '../cart/CartDetail';
import NotFound from '../common/NotFound';
import Navi from '../navi/Navi';
import AddOrUpdateProduct from '../products/AddOrUpdateProduct';
import Dashboard from './Dashboard';

function App() {
  return (
    <HashRouter basename="cihatdev.github.io/fronEnd-Dev/">
      <Container>
        <Navi />
        <Switch>
          <Route exact path="cihatdev.github.io/fronEnd-Dev/" component={Dashboard} />
          <Route path="cihatdev.github.io/fronEnd-Dev/product" component={Dashboard} />
          <Route path="cihatdev.github.io/fronEnd-Dev/cart" component={CartDetail} />
          <Route path="cihatdev.github.io/fronEnd-Dev/saveproduct/:productId" component={AddOrUpdateProduct} />
          <Route path="cihatdev.github.io/fronEnd-Dev/saveproduct" component={AddOrUpdateProduct} />
          <Route exact component={NotFound} />
        </Switch>
      </Container>
    </HashRouter>
  );
}

export default App;