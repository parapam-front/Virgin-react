import React from 'react'
import classes from './Review.module.scss'
import DetailProductFeedbackComment
  from '../components/Page/Detail/DetailProduct/DetailProductFeedback/DetailProductFeedbackComment/DetailProductFeedbackComment.jsx'
import DetailProductFeedbackForm
  from '../components/Page/Detail/DetailProduct/DetailProductFeedback/DetailProductFeedbackForm/DetailProductFeedbackForm.jsx'
import {connect} from 'react-redux'

const Review = ({review}) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.feedbackContainer}>
        <div className={classes.commentContainer}>
          <DetailProductFeedbackComment
            data={review.feedback}
            numberOfComments={review.numberOfComments}
            name={review.name}
          />
        </div>
        <DetailProductFeedbackForm
          localeKey={'rating'}
          name={review.name}
          rated={review.rated}
        />
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    review: state.detail.review[0]
  }
}

export default connect(mapStateToProps)(Review)
