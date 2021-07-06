import React from 'react'
import classes from './BlogLinkItem.module.scss'
import {Link} from 'react-router-dom'

const BlogLinkItem = ({item}) => {
  return (
    <Link to={'/blog/' + item.adress} className={classes.link}>
      <figure className={classes.cont}>
        <img
          className={classes.img}
          src={item.mainImg}
          alt="post image in blog"
        />
        <figcaption className={classes.figcaption}>
          <span className={classes.date}>{item.date}</span>
          <h4 className={classes.title}>{item.title}</h4>
          <p className={classes.descr}>{item.descr}</p>
          <div className={classes.linkText}>Подробнее</div>
        </figcaption>
      </figure>
    </Link>
  )
}

export default BlogLinkItem
