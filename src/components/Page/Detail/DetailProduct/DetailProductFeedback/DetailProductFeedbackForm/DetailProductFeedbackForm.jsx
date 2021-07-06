import React from 'react'
import classes from './DetailProductFeedbackForm.module.scss'
import Stars from '../../../../../Reused/FuncComponents/Stars/Stars.jsx'
import {connect} from 'react-redux'
import {sendComment} from '../../../../../../store/actions/actionDetail'


// eslint-disable-next-line no-shadow
const DetailProductFeedbackForm = ({name, rated, sendComment, mainReview, localeKey}) => {

  const localeStorageRate = JSON.parse(localStorage.getItem('rating')) || null
  const sendCommentClick = () => {
    const yourName = document.querySelector('[data-type="nameField"]')
    const comment = document.querySelector('[data-type="commentField"]')
    const date = new Date().toLocaleDateString()
    if (yourName.value && comment.innerText && rated) {
      if (!mainReview) {
        sendComment(name, yourName.value, comment.innerText, localeStorageRate[name], date)
        yourName.value = ''
        comment.innerText = ''
      }
    }
  }

  const prohibitions = (e) => {
    if ('1234567890'.indexOf(e.key) !== -1) {
      e.preventDefault()
    }
  }

  return (
    <form
      className={classes.feedbackForm}
      onSubmit={e => e.preventDefault()}
    >
      <span className={classes.feedbackDescription}>Написать отзыв</span>
      <input
        onKeyPress={prohibitions}
        className={classes.feedbackName}
        type="text"
        placeholder='Имя'
        data-type='nameField'
      />
      <div className={classes.feedbackStartContainer}>
        <Stars
          localeKey={localeKey}
          name={name}
          size={'28'}
          comment
          rated={rated}
          justifyContent={'flex-end'}
        />
      </div>
      <div
        className={classes.feedbackContentEditable}
        contentEditable
        data-placeholder='Ваш отзыв'
        data-type='commentField'
      />
      <button onClick={sendCommentClick} className={classes.feedbackButton}>
        <span className={classes.feedbackButtonText}>Оставить отзыв</span>
      </button>
    </form>

  )
}

function mapDispatchToProps(dispatch) {
  return {
    sendComment: (itemName, name, comment, date, rate) => dispatch(sendComment(itemName, name, comment, date, rate))
  }
}

export default connect(null, mapDispatchToProps)(DetailProductFeedbackForm)
