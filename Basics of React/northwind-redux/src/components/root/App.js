import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import CartDetail from '../cart/CartDetail';
import NotFound from '../common/NotFound';
import Navi from '../navi/Navi';
import AddOrUpdateProduct from '../products/AddOrUpdateProduct';
import Dashboard from './Dashboard';

function App() {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route path="cihatdev.github.io/fronEnd-Dev/" exact component={Dashboard} />
        <Route path="cihatdev.github.io/fronEnd-Dev/product" component={Dashboard} />
        <Route path="cihatdev.github.io/fronEnd-Dev/cart" component={CartDetail} />
        <Route path="cihatdev.github.io/fronEnd-Dev/saveproduct/:productId" component={AddOrUpdateProduct} />
        <Route path="cihatdev.github.io/fronEnd-Dev/saveproduct" component={AddOrUpdateProduct} />
        <Route component={NotFound} />
      </Switch>
    </Container>
  );
}

export default App;