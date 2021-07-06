import React, {Fragment} from 'react'
import classes from './DetailProductInfoDescr.module.scss'

const DetailProductInfoDescr = ({description}) => {
  return (
    <Fragment>
      <h2 className={classes.title}>{description.title}</h2>
      <div className={classes.description}>{description.descriptionProduct}</div>
      <div className={classes.plusesCont}>
        {
          description.pluses.map((item, i) => {
            return (
              <div className={classes.plusCont} key={'infoDescription' + i}>
                <div className={classes.plusSvgCont}>
                  <img src={item.svg} alt={'изображение' + (i + 1)}/>
                </div>
                <div className={classes.plusDescription}>
                  {/* eslint-disable-next-line no-shadow */}
                  <p key={'carryover' + i}>{item.text}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </Fragment>
  )
}

export default DetailProductInfoDescr
