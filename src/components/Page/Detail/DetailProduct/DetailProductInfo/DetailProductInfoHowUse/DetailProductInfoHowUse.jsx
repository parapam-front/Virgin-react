import React, {Fragment} from 'react'
import classes from './DetailProductInfoHowUse.module.scss'

const DetailProductInfoHowUse = ({howUse}) => {
  return (
    <Fragment>
      <div className={classes.stepsBlock}>
        {
          howUse.steps.map((item, i, arr) => {
            return (
              <div className={classes.stepContainer} key={'infoBlockHowUse' + i}>
                <div className={classes.stepSvgContainer}>
                  <img className={classes.img} src={item.svg} alt={'изображение ' + (i + 1) + 'шага'}/>
                  {
                    arr.length > (i + 1) ?
                      <img
                        className={classes.arrow}
                        src='/assets/img/detail/structure1/arrow.svg'
                        alt={'arrow' + (i + 1)}
                      />
                      :
                      ''
                  }
                  <span>{item.name}</span>
                </div>
                <div className={classes.stepContent}>
                  {item.content}
                </div>
              </div>
            )
          })
        }
      </div>
      <div className={classes.recipesBlock}>
        <h2 className={classes.title}>{howUse.productBased.title}</h2>
        <div className={classes.productBasedBlock}>
          {
            howUse.productBased.products.map((item, i) => {
              return (
                <a href='#' className={classes.link} key={'howUseLink' + i}>
                  <figure className={classes.productBasedContainer}>
                    <img src={item.img} alt={'изображёнение' + (i + 1)}/>
                    <figcaption className={classes.productBasedInfoContainer}>
                      <h3 className={classes.recipeTitle}>{item.title}</h3>
                      <p className={classes.recipeDescription}>{item.descr}</p>
                      <span className={classes.recipeHover}>Подробнее</span>
                    </figcaption>
                  </figure>
                </a>
              )
            })
          }
        </div>
      </div>
    </Fragment>
  )
}

export default DetailProductInfoHowUse
