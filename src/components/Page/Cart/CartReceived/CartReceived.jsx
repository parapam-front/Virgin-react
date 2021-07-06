import React from 'react'
import classes from './CartReceived.module.scss'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'

const CartReceived = ({order, number}) => {
  let homePush = useHistory()
  return (
    <section className={classes.container}>
      <h2 className={classes.title}>ваш заказ получен</h2>
      {
        order &&
        <>
          <div className={classes.orderInfoBlock}><span>заказ №{number}</span>
            <span className={classes.orderSum}>
          {
            order.order.reduce((prev, curr) => {
              return prev + curr.sumPrice
            }, 0)
          } ₽
        </span>
          </div>
          <div className={classes.orderElContainer}>
            {
              order.order.map((item, i) => {
                return (
                  <div key={'order ' + item.name + (i + 1)} className={classes.orderElBox}>
                    <div className={classes.orderElImgContainer}>
                      <img className={classes.orderElImg} src={item.img} alt={'order image ' + (i + 1)}/>
                    </div>
                    <div className={classes.orderElTextCont}>
                      <span className={classes.orderElName}>{item.name}</span>
                      <div className={classes.orderElValueCont}>
                        <span>{item.sumPrice}</span>
                        <span className={classes.orderElCount}>кол-во: {item.count}</span>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </>
      }
      <button onClick={() => homePush.push('/')} className={classes.buttonOnHome}>
        <span className={classes.buttonOnHomeText}>на главную</span>
      </button>

    </section>
  )
}

function mapStateToProps(state) {
  return {
    number: state.cart.orders.length,
    order: state.cart.orders[state.cart.orders.length - 1]
  }
}

export default connect(mapStateToProps)(CartReceived)
