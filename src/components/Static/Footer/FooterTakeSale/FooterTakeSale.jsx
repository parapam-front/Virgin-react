import React from 'react'
import classes from './FooterTakeSale.module.scss'

const FooterTakeSale = () => {
  return (
    <div className={classes.wrapper}>
      <form action="#" className={classes.form}>
        <legend className={classes.formLegend}>Подпишитесь на рассылку и получите скидку 100%</legend>
        <input className={classes.input} type="E-mail" placeholder="Укажите ваш E-mail"/>
        <button className={classes.submit} type='submit' disabled>
          <div className={classes.submitText}>получить скидку</div>
        </button>
      </form>
    </div>
  )
}

export default FooterTakeSale
