import React, {useState} from 'react'
import classes from './Navigator.module.scss'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {NavHashLink} from 'react-router-hash-link'

const Navigation = ({links, svg, nav, svgCont, content = null, wrapper = null, cartActive, cartValue}) => {
  const [popup, setPopup] = useState(false)

  function footerContent() {
    if (!content) {
      return
    }
    return (
      <>
        <div className={classes.cartCont}>
          <img
            src="/assets/img/footer/carts.png"
            alt="bank carts"
          />
        </div>
        {
          window.screen.availWidth < 1370 &&
          <div className={classes.mobileLinkCont}>
            <ul className={classes.nav__linksCont}>
              {
                links.map((item, i) => {
                  return (
                    <li
                      className={classes.li}
                      key={i}
                    >
                      {
                        item.type === 'history' ?
                          <Link
                            className={classes.a}
                            to={item.to}
                          >
                            {item.text}
                          </Link> :
                          <NavHashLink
                            smooth
                            className={classes.a}
                            to={item.to}
                          >
                            {item.text}
                          </NavHashLink>
                      }
                    </li>
                  )
                })
              }
            </ul>
            <a type="tel" href="+7(800)-111-11-11" className={[classes.a, classes.telNumb].join(' ')}>
              8 800 555 50 50
            </a>
            <a href='#' className={classes[svgCont]}> {svg(classes.svg)} </a>
            {
              cartValue > 0 && cartActive &&
              <div className={classes.cartValue}>
                <span>{cartValue}</span>
              </div>
            }
          </div>
        }
        <div className={classes.politicsCont}>
          <span>Политика конфиденциальности</span>
          <span>Distributed by Virgin Shilajit LTD Product of Altai Mountains</span>
          <span>все права защищены</span>
        </div>
      </>
    )
  }

  const popupToggle = () => {
    setPopup(!popup)
  }

  return (
    <div className={classes[wrapper]}>
      {
        window.screen.availWidth < 1370 && content ?
          <Link to="/">
            <img className={classes.logo} src="/assets/img/logo.png" alt="my logo"/>
          </Link>
          :
          // {
          window.screen.availWidth < 1370 && !content ?
            <>
              <nav className={nav.length > 1 ? nav.map(i => classes[i]).join(' ') : classes[nav]}>
                <div className={classes.navCont}>
                  <button onClick={popupToggle} className={classes.mobileBurger}>
                    <span/>
                    <span/>
                    <span/>
                  </button>
                  <Link to="/">
                    <img className={classes.logo} src="/assets/img/logo.png" alt="my logo"/>
                  </Link>
                  <Link to={'/cart'} className={classes[svgCont]}>
                    {svg(classes.svg)}
                    {
                      cartValue > 0 && cartActive &&
                      <div className={classes.cartValue}>
                        <span>{cartValue}</span>
                      </div>
                    }
                  </Link>
                </div>
              </nav>
              {
                popup &&
                <div className={classes.navPopup}>
                  <button onClick={popupToggle} className={classes.navPopupClose}>
                    <span/>
                    <span/>
                  </button>
                  <ul className={classes.nav__linksCont}>
                    {
                      links.map((item, i) => {
                        return (
                          <li className={classes.li} key={i}>
                            {
                              item.type === 'history' ?
                                <Link
                                  onClick={popupToggle}
                                  className={classes.a}
                                  to={item.to}
                                >
                                  {item.text}
                                </Link> :
                                <NavHashLink
                                  onClick={popupToggle}
                                  smooth
                                  className={classes.a}
                                  to={item.to}
                                >
                                  {item.text}
                                </NavHashLink>
                            }
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              }
            </>
            :
            <nav className={nav.length > 1 ? nav.map(i => classes[i]).join(' ') : classes[nav]}>
              <div className={classes.navCont}>
                <Link to="/">
                  <img className={classes.logo} src="/assets/img/logo.png" alt="my logo"/>
                </Link>
                <ul className={classes.nav__linksCont}>
                  {
                    links.map((item, i) => {
                      return (
                        <li className={classes.li} key={i}>
                          {
                            item.type === 'history' ?
                              <Link className={classes.a} to={item.to}>
                                {item.text}
                              </Link> :
                              <NavHashLink smooth className={classes.a} to={item.to}>
                                {item.text}
                              </NavHashLink>
                          }
                        </li>
                      )
                    })
                  }
                </ul>
                <div className={classes.nav__cartCont}>
                  <a type="tel" href="+7(800)-111-11-11" className={[classes.a, classes.telNumb].join(' ')}>
                    8 800 555 50 50
                  </a>
                  {
                    content ?
                      <a href="#" className={classes[svgCont]}>
                        {svg(classes.svg)}
                        {
                          cartValue > 0 && cartActive &&
                          <div className={classes.cartValue}>
                            <span>{cartValue}</span>
                          </div>
                        }
                      </a>
                      :
                      <Link to={'/cart'} className={classes[svgCont]}>
                        {svg(classes.svg)}
                        {
                          cartValue > 0 && cartActive &&
                          <div className={classes.cartValue}>
                            <span>{cartValue}</span>
                          </div>
                        }

                      </Link>
                  }

                </div>
              </div>
            </nav>
      }
      {footerContent()}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    cartValue: state.detail.cart.length
  }
}

export default connect(mapStateToProps)(Navigation)
