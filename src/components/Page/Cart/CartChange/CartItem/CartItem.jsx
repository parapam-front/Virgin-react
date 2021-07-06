import React from 'react'
import classes from './CartItem.module.scss'
import CounterNumb from '../../../../Reused/FuncComponents/CounterNumb/CounterNumb.jsx'
import {connect} from 'react-redux'
import {deleteItemCart} from '../../../../../store/actions/actionDetail'

// eslint-disable-next-line no-shadow
const CartItem = ({item, i, deleteItemCart}) => {

  const deleteItem = () => {
    deleteItemCart(i)
  }

  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <button onClick={deleteItem} className={classes.delete}><span className={classes.first}/><span/></button>
        <img className={classes.img} src={item.img} alt={'cart Image' + (i + 1)}/>
        <span className={classes.name}>{item.name}</span>
      </div>
      <div className={classes.counterCont}>
        <span className={classes.priceValue}>{item.sumPrice} ₽</span>
        <CounterNumb count={item.count} name={item.name} sum={item.sumPrice}/>
      </div>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    deleteItemCart: (index) => dispatch(deleteItemCart(index))
  }
}

export default connect(null, mapDispatchToProps)(CartItem)
