import React from 'react'
import classes from './Blog.module.scss'
import {connect} from 'react-redux'
import BlogLinkItem from '../components/Page/Blog/BlogLinkItem/BlogLinkItem.jsx'

const Blog = ({blog}) => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.blogContainer}>
        {
          blog.map((item, i) => {
            return (
              <BlogLinkItem key={item.title + i} item={item}/>
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

export default connect(mapStateToProps)(Blog)
