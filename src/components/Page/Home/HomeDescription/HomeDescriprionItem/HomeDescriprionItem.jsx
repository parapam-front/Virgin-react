import React from 'react'
import classes from './HomeDescriprionItem.module.scss'

const HomeDescriprionItem = () => {
 return (
  <section className={classes.wrapper}>
   <div className={classes.cont}>
    <div className={classes.titleCont}>
     <span className={classes.line} />
     <h4 >первый заголовок</h4>
    </div>
    <p className={classes.descr}>Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма человека!
    </p>
    <a className={classes.link} href="#">
      <div className={classes.linkText}>подробнее</div>
    </a>
   </div>
  </section>
 )
}

export default HomeDescriprionItem
