import React, {Fragment} from 'react'
import classes from './DetailProductSlider.module.scss'

const DetailProductSlider = ({name, img}) => {

  return (
    <div className={classes.imgCont}>
      {
        img.map((src, i) => {
          return (
            <Fragment key={name + src + i}>
              <input className={classes.input} type="radio" defaultChecked={i === 0} name={name + '_img'} id={src + i}/>
              <label className={classes.label} htmlFor={src + i}>
                <img src={src} alt={`product image ${i + 1}`}/>
              </label>
              <div className={classes.bigImgCont}>
                <img className={classes.img} src={src} alt={`selected image ${i + 1}`}/>
              </div>
            </Fragment>
          )
        })
      }
    </div>
  )
}
export default DetailProductSlider
