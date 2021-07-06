import React from 'react'
import classes from './CartOrderingItem.module.scss'

const CartOrderingItem = ({img, count, price, name}) => {
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <img src={img} alt="product image"/>
      </div>
      <div className={classes.textContainer}>
        <span className={classes.textName}>{name}</span>
        <div className={classes.priceContainer}>
          <span className={classes.price}>{price} ₽</span>
          <span className={classes.number}>Кол-во: {count}</span>
        </div>
      </div>
    </div>
  )
}

export default CartOrderingItem
