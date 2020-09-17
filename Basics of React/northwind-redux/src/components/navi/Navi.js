import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Button
} from 'reactstrap';
import CartSummary from '../cart/CartSummary';

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><Button color="dark">React App</Button></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/"> <Button color="success">Ana Menü</Button></NavLink>
            </NavItem>
            <CartSummary />
          </Nav>
          <NavbarText>#######</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;