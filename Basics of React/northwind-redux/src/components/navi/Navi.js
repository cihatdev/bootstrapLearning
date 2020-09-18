import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Button,
  Badge
} from 'reactstrap';
import CartSummary from '../cart/CartSummary';

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand ><Link to="/"><h4>Northwind Project</h4></Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="cihatdev.github.io/fronEnd-Dev/"> <Button color="success">Ana Menü</Button></NavLink>
            </NavItem>
            <CartSummary />
          </Nav>
          <NavbarText><Button color="success">
            <Link to="cihatdev.github.io/fronEnd-Dev/saveproduct/">Ürün Ekle</Link>
          </Button>
          </NavbarText>
        </Collapse>
      </Navbar >
    </div >
  );
}

export default Navi;