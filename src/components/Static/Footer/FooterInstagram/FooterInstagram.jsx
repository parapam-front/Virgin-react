import React from 'react'
import classes from './FooterInstagram.module.scss'

const FooterInstagram = () => {

  const imgCont = [
    '/assets/img/footer/insta1.png',
    '/assets/img/footer/insta2.png',
    '/assets/img/footer/insta3.png',
    '/assets/img/footer/insta4.png'
  ]

  return (
    <section className={classes.wrapper}>
      <div className={classes.imgCont}>
        {
          imgCont.map((src, i) => {
            return (
              <img key={i} src={src} alt={'insta' + i}/>
            )
          })
        }
      </div>
      <a
        href="#"
        className={classes.link}
      >
        <span className={classes.linkText}>follow our instagram</span>
      </a>
    </section>
  )
}

export default FooterInstagram
