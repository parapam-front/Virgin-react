import React from 'react'
import FooterInstagram from './FooterInstagram/FooterInstagram.jsx'
import FooterTakeSale from './FooterTakeSale/FooterTakeSale.jsx'
import {useLocation} from 'react-router-dom'
import Navigation from '../../Reused/Navigation/Navigation.jsx'

const Footer = () => {

  function svgCont() {
    return (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.6">
          <path
            d="M19.9984 24.0038C22.2049 24.0038 24.0038 22.2081 24.0038 20C24.0038 19.1283 23.7186 18.3235 23.2466 17.6661C22.5191 16.6575 21.3365 15.9961 20.0008 15.9961C18.6643 15.9961 17.4824 16.6567 16.7534 17.6653C16.2797 18.3227 15.9969 19.1275 15.9961 19.9992C15.9937 22.2073 17.791 24.0038 19.9984 24.0038Z"
          />
          <path d="M28.7393 15.1017V11.7456V11.2461L28.2374 11.2477L24.8828 11.2582L24.8957 15.1146L28.7393 15.1017Z"/>
          <path
            d="M20 0C8.97205 0 0 8.97205 0 20C0 31.0271 8.97205 40 20 40C31.0271 40 40 31.0271 40 20C40 8.97205 31.0288 0 20 0ZM31.3744 17.6662V26.979C31.3744 29.4047 29.4022 31.376 26.9782 31.376H13.0218C10.597 31.376 8.62563 29.4047 8.62563 26.979V17.6662V13.0226C8.62563 10.5978 10.597 8.62644 13.0218 8.62644H26.9774C29.4022 8.62644 31.3744 10.5978 31.3744 13.0226V17.6662Z"
          />
          <path
            d="M26.2205 20.0008C26.2205 23.4303 23.4299 26.2225 19.9988 26.2225C16.5677 26.2225 13.7779 23.4303 13.7779 20.0008C13.7779 19.1759 13.9422 18.3872 14.2355 17.667H10.8398V26.9798C10.8398 28.1834 11.817 29.1582 13.0198 29.1582H26.9753C28.1765 29.1582 29.1553 28.1834 29.1553 26.9798V17.667H25.7581C26.0537 18.3872 26.2205 19.1759 26.2205 20.0008Z"
          />
        </g>
      </svg>
    )
  }

  const navLastLink = {
    target: '_blank',
    url: 'https://www.instagram.com/'
  }

  const loc = useLocation().pathname

  const navClass = ['nav']

  const navLinks = [
    {
      text: 'Как использовать',
      to: '/howUse'
    },
    {
      text: 'о продукте',
      to: '/details'
    },
    {
      text: 'Блог',
      to: '/blog'
    },
    {
      text: 'контакты',
      to: '/contucts'
    }
  ]

  return (
    <footer>
      {
        !loc.includes('/cart') &&
        !loc.includes('/contucts') &&
        <FooterTakeSale/>
      }
      {
        (loc === '/' || loc.includes('/details') || loc.includes('/review')) &&
        <FooterInstagram/>
      }
      <Navigation
        nav={navClass}
        links={navLinks}
        svg={svgCont}
        content={1}
        cartActive={false}
        lastLink={navLastLink}
        svgCont={'instaLink'}
        wrapper={'wrapper'}
      />
    </footer>
  )
}

export default Footer
