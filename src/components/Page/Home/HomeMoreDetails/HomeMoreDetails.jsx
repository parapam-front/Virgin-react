import React from 'react'
import classes from './HomeMoreDetails.module.scss'

const HomeMoreDetails = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.textCont}>
        <span className={classes.text}> узнай на что ты способен c shilajit </span>
        <button className={classes.button}>
          <div className={classes.buttonText}> Подробнее</div>
        </button>
      </div>
      <img
        src="/assets/img/details.png"
        alt="to learn more Image"
      />
    </section>
  )
}

export default HomeMoreDetails
