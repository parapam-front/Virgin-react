import React from 'react'
import {connect} from 'react-redux'
import DetailProductInfo from '../components/Page/Detail/DetailProduct/DetailProductInfo/DetailProductInfo.jsx'
import Review from './Review.jsx'

const HowUse = ({infoBlock}) => {
  return (
    <>
      <DetailProductInfo infoBlock={infoBlock} howUse={1}/>
      <Review/>
    </>
  )
}

function mapStateToProps(state) {
  return {
    infoBlock: state.detail.products[0].infoBlock,
  }
}

export default connect(mapStateToProps)(HowUse)
