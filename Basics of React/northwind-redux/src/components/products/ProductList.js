import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge, Button, Table } from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as  productActions from '../../redux/actions/productActions'
import * as  cartActions from '../../redux/actions/cartActions'
import alertify from "alertifyjs"


class ProductList extends Component {

  componentDidMount() {
    this.props.actions.getProducts();
  }

  addToCart = (product) => {
    this.props.actions.addToCart({ quantity: 1, product })
    alertify.success(product.productName + "  Sepete Eklendi 🎈🎉✨🎇...")
  }

  render() {
    return (
      <div>
        <Badge color="warning">Ürünler</Badge>
        <Badge color="success">{this.props.currentCategory.categoryName}</Badge>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Ürün Adı</th>
              <th>Ürün Fiyatı</th>
              <th>Birim Adedi</th>
              <th>Stoktaki Birim Adedi</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>@{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <Button color="success" onClick={() => this.addToCart(product)}>
                    Ekle
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
