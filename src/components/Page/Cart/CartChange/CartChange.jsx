import React from 'react'
import classes from './CartChange.module.scss'
import {connect} from 'react-redux'
import CartItem from './CartItem/CartItem.jsx'
import {useHistory} from 'react-router-dom'

const CartChange = ({cart}) => {
  let nextLink = useHistory()


  const nextPage = () => {
    if (cart.length > 0) {
      nextLink.push('/cart/ordering')
    }
  }

  return (
    <>
      <h2 className={classes.title}>Корзина</h2>
      <div className={classes.cartContent}>
        <div className={classes.productsContainer}>
          {
            cart.map((item, i) => {
              return (
                <CartItem i={i} key={'cartItem' + (i + 1)} item={item}/>
              )
            })
          }
        </div>
        {
          cart.length > 0 &&
          <div className={classes.totalCont}>
            <div className={classes.totalTextContainer}>
              <span>Итого</span>
              <span>
                {
                  cart.reduce((prev, curr) => {
                    return prev + curr.sumPrice
                  }, 0)
                } ₽
              </span>
            </div>
            <button onClick={nextPage} className={classes.checkout}><span className={classes.checkoutText}>оформить заказ</span>
            </button>
          </div>
        }
      </div>
    </>
  )
}

function mapStateToProps(state) {
  return {
    cart: state.detail.cart
  }
}

export default connect(mapStateToProps)(CartChange)
