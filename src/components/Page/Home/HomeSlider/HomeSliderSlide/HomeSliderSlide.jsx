import React from 'react'
import classes from './HomeSliderSlide.module.scss'
import {HashLink} from 'react-router-hash-link'

const HomeSliderSlide = ({slide, price, title}) => {
  return (
    <section
      className={classes.wrapper}
      style={{backgroundImage: `url("/assets/img/slide${slide}.png")`}}
    >
      <div className={classes.cont}>
        <div className={classes.titleCont}>
          {
            slide === '2' ?
              <h1 className={classes.title}>{title}</h1> :
              <span className={classes.title}>{title}</span>
          }
          <HashLink
            className={classes.link}
            to='/#buy'
            smooth
          >
            <div className={classes.linkText}>Купить</div>
          </HashLink>
        </div>
        <figure className={classes.productCont}>
          <img className={classes.productImg} src={`/assets/img/slideProduct${slide}.png`} alt="product"/>
          <figcaption className={classes.productPrice}>{price} р</figcaption>
        </figure>
        <img className={classes.productBg} src={`/assets/img/slideBg${slide}.png`} alt='productBg'/>
      </div>
    </section>
  )
}

export default HomeSliderSlide
