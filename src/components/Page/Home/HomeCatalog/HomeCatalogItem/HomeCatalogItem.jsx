import React, {useEffect, useState} from 'react'
import classes from './HomeCatalogItem.module.scss'
import {Link} from 'react-router-dom'

const HomeCatalogItem = ({price, avaible, src, name, sell, href}) => {
  const getWidth = () => window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

  const [size, setSize] = useState(getWidth())

  useEffect(() => {
    const resize = () => {
      setSize(getWidth())
    }
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  })

  return (
    avaible ?
      <Link to={'/details/' + href} className={classes.wrapper} style={{maxWidth: size * 0.6, maxHeight: size * 0.6}}>
        <div className={classes.productInfo__cont}>
          <span className={classes.productName}>Virgin shilajit - {name}</span>
          <span className={classes.productPortions}>85 порций</span>
        </div>
        <img className={classes.productImg} src={src} alt="product image in catalog"/>
        <div className={classes.addCart__Cont}>
          <div className={classes.addCart__priceCont}>
            <div className={classes.addCart__price}>
              {price} Р
              {
                sell &&
                <span className={classes.addCart__priceCross}/>
              }
            </div>
            {
              sell &&
              <span className={classes.addCart__priceSell}>{price * 0.9} Р</span>
            }
          </div>
          <div className={classes.addCart_addButton}>
            <span className={classes.addCart__addText}>Купить</span>
            <div className={classes.addCart__addPlus}>
              <span className={classes.horizontal}/>
              <span className={[classes.horizontal, classes.vertical].join(' ')}/>
            </div>
          </div>
        </div>
        {
          !avaible &&
          <div className={classes.notAvaible}>
            <span className={classes.notAvaible__text}>Нет в Наличии</span>
          </div>
        }
      </Link> :
      <div className={classes.wrapper} style={{maxWidth: size * 0.6, maxHeight: size * 0.6}}>
        <div className={classes.productInfo__cont}>
          <span className={classes.productName}>Virgin shilajit - {name}</span>
          <span className={classes.productPortions}>85 порций</span>
        </div>
        <img
          className={classes.productImg}
          src={src}
          alt="product image in catalog"
        />
        <div className={classes.addCart__Cont}>
          <div className={classes.addCart__priceCont}>
            <div className={classes.addCart__price}>
              {price} Р
              {
                sell &&
                <span className={classes.addCart__priceCross}/>
              }
            </div>
            {
              sell &&
              <span className={classes.addCart__priceSell}>{price * 0.9} Р</span>
            }
          </div>
          <div className={classes.addCart_addButton}>
            <span className={classes.addCart__addText}>Купить</span>
            <div className={classes.addCart__addPlus}>
              <span className={classes.horizontal}/>
              <span className={[classes.horizontal, classes.vertical].join(' ')}/>
            </div>
          </div>
        </div>
        {
          !avaible &&
          <div className={classes.notAvaible}>
            <span className={classes.notAvaible__text}>Нет в Наличии</span>
          </div>
        }
      </div>
  )
}

export default HomeCatalogItem
