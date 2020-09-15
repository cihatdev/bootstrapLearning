import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink
} from 'reactstrap';

export default class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Cart - <Badge color="danger">{this.props.cart.length}</Badge>
        </DropdownToggle>
        <DropdownMenu right>
          {
            this.props.cart.map(cartItem => (
              <DropdownItem key={cartItem.product.id}>
                <Badge color="warning" onClick={() => this.props.removeFromCart(cartItem.product)} >x</Badge>
                {cartItem.product.productName}
                <Badge color="success">{cartItem.quantity}</Badge>
              </DropdownItem>
            ))
          }
          <DropdownItem>
            <Link to="cart"> Go to cart </Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
  renderEmptycart() {
    return (
      <NavItem>
        <NavLink>
          Empty Cart
       </NavLink>
      </NavItem>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmptycart()}
      </div >
    )
  }
}
