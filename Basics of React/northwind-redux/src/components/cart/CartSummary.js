import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
  NavItem,
  Badge,
  Button,
} from 'reactstrap';
import { bindActionCreators } from 'redux'
import * as  cartActions from '../../redux/actions/cartActions'
import { Link } from "react-router-dom"
import alertify from 'alertifyjs';

class CartSummary extends Component {
  removeFromCart(product) {
    this.props.actions.removeFromCart(product)
    alertify.error(product.productName + "  Sepetten Silindi 🧨🧨...")
  }
  renderEmpty() {
    return (
      <NavItem>
        <NavLink href="cihatdev.github.io/fronEnd-Dev/cart"><Button color="danger">Sepetiniz Boş</Button></NavLink>
      </NavItem>
    )
  }

  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          <Button color="success">
            Sepetiniz
          </Button>
        </DropdownToggle>
        <DropdownMenu right>
          {
            this.props.cart.map(cartItem => (
              <DropdownItem key={cartItem.productId}>
                <Badge color="danger" onClick={() => this.removeFromCart(cartItem.product)}
                >X</Badge>
                <Badge color="warning">
                  {cartItem.product.productName}
                </Badge>
                <Badge color="success">{cartItem.quantity}</Badge>
              </DropdownItem>
            ))
          }
          <DropdownItem divider />
          <DropdownItem>
            <Link to="/cihatdev.github.io/fronEnd-Dev/cart">
              <Badge color="info">
                Sepete Git
              </Badge>
            </Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }

  render() {
    return (
      <div>
        {
          this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()
        }
      </div>
    );
  }
}

//bir action kullanmak için
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    }
  }
}

//state bağlanmak için
function mapStateToProps(state) {
  return {
    cart: state.cartReducer
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);