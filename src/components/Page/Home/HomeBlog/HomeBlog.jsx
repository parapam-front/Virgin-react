import React from 'react'
import classes from './HomeBlog.module.scss'
import HomeBlogItem from './HomeBlogItem/HomeBlogItem.jsx'
import {connect} from 'react-redux'
import {shuffleArray} from '../../../Reused/FuncComponents/allReusedFunction'

const HomeBlog = ({blog}) => {

  return (
    <section className={classes.wrapper}>
      <h3 className={classes.title}>Блог</h3>
      <span className={classes.descr}>Shilajit журнал</span>
      <div className={classes.linkBlock}>
        {
          shuffleArray(blog).map((item, i) => {
            return (
              <HomeBlogItem
                key={item.title + i}
                item={item}
              />
            )
          })
        }
      </div>
    </section>
  )
}

function mapStateToProps(state) {
  return {
    blog: state.blog.blogArticles
  }
}

export default connect(mapStateToProps)(HomeBlog)
