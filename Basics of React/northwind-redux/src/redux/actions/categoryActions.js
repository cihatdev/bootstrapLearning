import * as actiontypes from "./actionTypes"

export function changeCategory(category) {
  return { type: actiontypes.CHANGE_CATEGORY, payload: category }
}

export function getCategoriesSuccess(categories) {
  return { type: actiontypes.GET_CATEGORIES_SUCCESS, payload: categories }
}

export function getCategories() {
  return function (dispatch) {
    let url = "http://localhost:3000/categories"
    return fetch(url)
      .then(response => response.json())
      .then(result => dispatch(getCategoriesSuccess(result)))

  }
}