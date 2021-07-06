import React from 'react'
import classes from './CounterNumb.module.scss'
import {connect} from 'react-redux'
import {changeCountProduct} from '../../../../store/actions/actionDetail'

const CounterNumb = (props) => {

  const addOrSub = (val) => {
    props.changeCountProduct(props.name, props.count + val)

  }
  return (

    <div className={classes.changeNumbCont}>
      <button className={classes.buttonMinus} onClick={() => props.count > 1 ? addOrSub(-1) : ''}/>
      <span>{props.count}</span>
      <button className={classes.buttonPlus} onClick={() => props.count < 99 ? addOrSub(1) : ''}/>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    changeCountProduct: (name, val) => dispatch(changeCountProduct(name, val))
  }
}

export default connect(null, mapDispatchToProps)(CounterNumb)
