import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge, Button, Table } from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as  cartActions from '../../redux/actions/cartActions'
import alertify from "alertifyjs"


class CartDetail extends Component {
  removeFromCart(product) {
    this.props.actions.removeFromCart(product)
    alertify.error(product.productName + "  Sepetten Silindi 🧨🧨...")
  }
  renderEmpty() {
    return (
      <div>
        <h1>
          <Badge color="danger">
            Sepetiniz Boş
          </Badge>
        </h1>
      </div>
    )
  }
  renderCartDetail() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Ürün Adı</th>
              <th>Ürün Fiyatı</th>
              <th>Miktar</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map(cartItem => (
              <tr key={cartItem.product.id}>
                <th scope="row">{cartItem.product.id}</th>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.quantity}</td>
                <td>
                  <Button color="danger" onClick={() => this.removeFromCart(cartItem.product)}>
                    Sil
                </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }

  render() {
    return (
      <div>
        {
          this.props.cart.length > 0 ? this.renderCartDetail() : this.renderEmpty()
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

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);