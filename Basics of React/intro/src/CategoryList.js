import React, { Component } from 'react'
import { ListGroupItem, ListGroup } from 'reactstrap'

export default class CategoryList extends Component {
  state = {
    categories: [
      { categoryId: 1, categoryName: "Beverages" },
      { categoryId: 2, categoryName: "Condiments" },
      { categoryId: 3, categoryName: "Şargam" },
      { categoryId: 4, categoryName: "Ayran" },
      { categoryId: 5, categoryName: "Cola" },
      { categoryId: 6, categoryName: "Fanta" },
      { categoryId: 7, categoryName: "Süt" },
      { categoryId: 8, categoryName: "Kızılcık" },
    ],
    currentCategory: "",
  }
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName })
  }
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map(category => (
            <ListGroupItem onClick={() => this.changeCategory(category)} key={category.categoryId}>{category.categoryName}</ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.state.currentCategory}</h4>
      </div>
    )
  }
}
