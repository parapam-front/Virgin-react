import React, {Fragment} from 'react'
import classes from './DetailProductFeedbackComment.module.scss'
import {connect} from 'react-redux'
import {feedbackShowMore} from '../../../../../../store/actions/actionDetail'

// eslint-disable-next-line no-shadow
const DetailProductFeedbackComment = ({name, data, numberOfComments, feedbackShowMore, review}) => {
  const svgCont = [1, 2, 3, 4, 5]

  const classSvg = (rate, i) => {
    if (rate >= i + 1) {
      return classes.svgFill

    }
    return classes.svgStroke
  }

  const showMore = () => {
    if (!review) {
      feedbackShowMore(name, numberOfComments + 5)
    }
  }

  return (
    <Fragment>
      {
        data.slice(0).reverse().map((item, index) => {
          if (numberOfComments >= index + 1) {
            return (
              <article className={classes.commentBox} key={'comment' + index}>
                <div className={classes.commentNameContainer}>
                  <span className={classes.commentName}>{item.name}</span>
                  <span className={classes.commentDate}>{item.date}</span>
                </div>
                <p className={classes.commentContent}>{item.comment}</p>
                <div className={classes.commentRate}>
                  {
                    // eslint-disable-next-line no-shadow
                    svgCont.map((star, i, arr) => {
                      return (
                        <svg className={classes.starSvg} key={'star' + i} width="20" height="19" viewBox="0 0 20 19"
                             xmlns="http://www.w3.org/2000/svg"
                        >
                          <path className={classSvg(item.rate, i)}
                                d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                          />
                        </svg>
                      )
                    })
                  }
                </div>
              </article>
            )
          }
        })
      }
      {
        numberOfComments < data.length &&
        <button className={classes.commentButton} onClick={showMore}><span>Показать ещё</span></button>
      }
    </Fragment>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    feedbackShowMore: (name, val) => dispatch(feedbackShowMore(name, val))
  }
}

export default connect(null, mapDispatchToProps)(DetailProductFeedbackComment)
