import React from 'react'
import classes from './DetailProductFeedback.module.scss'
import DetailProductFeedbackComment from './DetailProductFeedbackComment/DetailProductFeedbackComment.jsx'
import DetailProductFeedbackForm from './DetailProductFeedbackForm/DetailProductFeedbackForm.jsx'

const DetailProductFeedback = ({product}) => {

  return (
    <section className={classes.wrapper}>
      <h3 className={classes.title}>отзывы</h3>
      <div className={classes.feedbackContainer}>
        <div className={classes.commentContainer}>
          <DetailProductFeedbackComment
            data={product.feedback}
            numberOfComments={product.numberOfComments}
            name={product.name}
          />
        </div>
        <DetailProductFeedbackForm
          localeKey={'rating'}
          name={product.name}
          rated={product.rated}
        />
      </div>
    </section>
  )
}


export default DetailProductFeedback
