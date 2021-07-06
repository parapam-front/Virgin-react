import React from 'react'
import classes from './HeaderNavigation.module.scss'
import {useLocation} from 'react-router-dom'
import Navigation from '../../Reused/Navigation/Navigation.jsx'

const HeaderNavigation = () => {
  const svg = (classSvg) => {
    return (
      <svg className={classSvg} width="24" height="24" viewBox="0 0 24 24" fill="none"
           xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.9175 19.1504C14.876 19.1552 14.0705 20.0414 14.0754 21.1163C14.0803 22.1911 14.9395 23.0697 15.9355 23.0651C16.9316 23.0605 17.7826 22.1741 17.7777 21.0992C17.7727 20.0244 16.9136 19.1458 15.9175 19.1504ZM15.931 22.0841C15.408 22.0865 15.0284 21.647 15.026 21.1072C15.0235 20.5674 15.449 20.1242 15.922 20.122C16.395 20.1199 16.8246 20.5591 16.8271 21.0989C16.8295 21.6387 16.404 22.0819 15.931 22.0841Z"
        />
        <path
          d="M5.81597 19.1969C4.77443 19.2017 3.9689 20.0878 3.97384 21.1627C3.97878 22.2376 4.83791 23.1161 5.83397 23.1115C6.87551 23.1067 7.68104 22.2206 7.6761 21.1457C7.67116 20.0708 6.81203 19.1923 5.81597 19.1969ZM5.82946 22.1305C5.30641 22.1329 4.92688 21.6934 4.9244 21.1536C4.92192 20.6139 5.34742 20.1707 5.82044 20.1685C6.34348 20.1661 6.72302 20.6056 6.7255 21.1454C6.728 21.6898 6.30702 22.1283 5.82946 22.1305Z"
        />
        <path
          d="M20.2857 0.0448351L19.5626 3.0335L0.951225 3.11906L4.43341 13.6034C3.28351 13.7823 2.42851 14.7908 2.43445 16.0816C2.44096 17.4991 3.48769 18.6208 4.81577 18.6147L17.7145 18.5554L17.7103 17.626L4.81149 17.6853C4.00646 17.689 3.38475 17.0066 3.38069 16.1242C3.37664 15.2417 4.03753 14.5534 4.79708 14.5499L17.6958 14.4906L17.7413 14.4904L21.0451 1.01768L22.9418 1.00896L22.9373 0.0326441L20.2857 0.0448351ZM17.0273 13.5173L5.41115 13.5707L2.2838 4.08927L19.3078 4.01101L17.0273 13.5173Z"
        />
        <path d="M7.93886 6.36331L6.98828 6.36768L7.0137 11.897L7.96428 11.8926L7.93886 6.36331Z"/>
        <path d="M11.31 6.3478L10.3594 6.35217L10.3848 11.8815L11.3354 11.8771L11.31 6.3478Z"/>
        <path d="M14.6732 6.33236L13.7227 6.33673L13.7481 11.8661L14.6987 11.8617L14.6732 6.33236Z"/>
      </svg>
    )
  }

  const loc = useLocation().pathname

  const spanContent = [
    'источник здоровья на протяжении 10000 лет',
    'собран на высоте 3000 м',
    'кровь алтайских гор'
  ]

  const navLinks = [
    {
      text: 'Как использовать',
      to: '/howUse#howUse',
      type: 'hash'
    },
    {
      text: 'о продукте',
      to: '/#details',
      type: 'hash'
    },
    {
      text: 'Блог',
      to: '/blog',
      type: 'history'
    },
    {
      text: 'Отзывы',
      to: '/review',
      type: 'history'
    },
    {
      text: 'контакты',
      to: '/contucts',
      type: 'history'
    }
  ]

  const navClass = ['nav']

  const positionPush = [
    classes.header
  ]


  if (loc !== '/') {
    navClass.push('navInvert')
    positionPush.push(classes.headerPos)
  }

  return (
    <header className={positionPush.join(' ')}>
      {
        (loc === '/' || loc.includes('/detail')) &&
        <aside className={classes.header__info}>
          {
            spanContent.map((val, i) => {
              return (
                <span key={i} className={classes.header__infoSpan}>{val}</span>
              )
            })
          }
        </aside>
      }
      <Navigation
        links={navLinks}
        svg={svg}
        nav={navClass}
        svgCont={'nav__cart'}
        content={0}
        cartActive={1}
      />
    </header>
  )
}

export default HeaderNavigation
