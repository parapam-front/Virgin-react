import {
  ADDCARTACTION,
  CHANGECOUNTPRODUCT,
  CHANGEPORTIONVALUE, CLEARCART,
  CONCATRATING, DELETEITEMCART,
  FEEDBACKSHOWMORE,
  SENDCOMMENT
} from './actionTypes'


export function concatRating(name, val, rated) {
  return {
    type: CONCATRATING,
    data: {name, val, rated}
  }
}

export function changeCountProduct(name, val) {
  return {
    type: CHANGECOUNTPRODUCT,
    data: {name, val}
  }
}

export function changePortionValue(name, val, position, price) {
  return {
    type: CHANGEPORTIONVALUE,
    data: {name, val, position, price}
  }
}

export function addCartAction(data) {
  return {
    type: ADDCARTACTION,
    data
  }
}

export function feedbackShowMore(name, val) {
  return {
    type: FEEDBACKSHOWMORE,
    data: {name, val}
  }
}

export function sendComment(itemName, name, comment, rate, date) {
  return {
    type: SENDCOMMENT,
    data: {itemName, name, comment, rate, date}
  }
}

export function deleteItemCart(index) {
  return {
    type: DELETEITEMCART,
    index
  }
}

export function clearCart() {
  return {
    type: CLEARCART
  }
}
