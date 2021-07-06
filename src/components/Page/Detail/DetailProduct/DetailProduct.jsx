import React from 'react'
import classes from './DetailProduct.module.scss'
import DetailProductMain from './DetailProductMain/DetailProductMain.jsx'
import DetailProductInfo from './DetailProductInfo/DetailProductInfo.jsx'
import DetailProductVideo from './DetailProductVideo/DetailProductVideo.jsx'
import DetailProductFeedback from './DetailProductFeedback/DetailProductFeedback.jsx'

const DetailProduct = ({product}) => {
  return (
    <section className={classes.wrapper}>
      <DetailProductMain product={product}/>
      <DetailProductInfo
        infoBlock={product.infoBlock}
        descr={1}
      />
      <DetailProductVideo videoBlock={product.videoBlock}/>
      <DetailProductFeedback product={product}/>
    </section>
  )
}

export default DetailProduct
