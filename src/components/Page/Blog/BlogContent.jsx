import React from 'react'
import classes from './BlogContent.module.scss'
import BlogItem from './BlogItem/BlogItem.jsx'
import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'

const BlogContent = ({blogData}) => {
  let adress = useParams()
  return (
    <section className={classes.wrapper}>
      <BlogItem blogData={blogData.filter(item => item.adress === adress.name)[0]}/>
    </section>
  )
}

function mapStateToProps(state) {
  return {
    blogData: state.blog.blogArticles
  }
}

export default connect(mapStateToProps)(BlogContent)
