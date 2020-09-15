import React, { Component, toggle, isOpen } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import CartSummary from './CartSummary';

export default class productList extends Component {

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="form1/">Form Demo 1</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="form2/">Form Demo 2</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">GitHub</NavLink>
              </NavItem>
              <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart} />
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}