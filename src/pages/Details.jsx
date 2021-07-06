import React from 'react'
import DetailProduct from '../components/Page/Detail/DetailProduct/DetailProduct.jsx'
import classes from './Details.module.scss'
import {useParams, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

const Details = (props) => {
  const {name} = useParams()

  return (
    <div className={classes.wrapper}>
      {
        props.products.filter(item => item.name === name)[0] ?
          <DetailProduct product={props.products.filter(item => item.name === name)[0]}/> :
          <Redirect to='/'/>
      }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    products: state.detail.products
  }
}

export default connect(mapStateToProps)(Details)
