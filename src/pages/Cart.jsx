import React from 'react'
import classes from './Cart.module.scss'
import CartChange from '../components/Page/Cart/CartChange/CartChange.jsx'
import {Route, Switch} from 'react-router-dom'
import CartOrdering from '../components/Page/Cart/CartOrdering/CartOrdering.jsx'
import CartReceived from '../components/Page/Cart/CartReceived/CartReceived.jsx'

const Cart = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.container}>

        <Switch>
          <Route path={'/cart/orderReceived'} component={CartReceived}/>
          <Route path={'/cart/ordering'} component={CartOrdering}/>
          <Route path={'/cart'} component={CartChange}/>
        </Switch>
      </div>
    </section>
  )
}


export default Cart
