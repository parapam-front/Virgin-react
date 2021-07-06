import React from 'react'
import classes from './HomeBlogItem.module.scss'
import {Link} from 'react-router-dom'

const HomeBlogItem = ({item}) => {
  return (
    <Link to={'/blog/' + item.adress} className={classes.link}>
      <figure className={classes.cont}>
        <img className={classes.img} src={item.mainImg} alt="post image in blog"/>
        <figcaption className={classes.figcaption}>
          <h4 className={classes.title}>{item.title}</h4>
          <p className={classes.descr}>{item.descr}</p>
        </figcaption>
      </figure>
    </Link>
  )
}

export default HomeBlogItem
