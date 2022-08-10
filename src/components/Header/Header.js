import React from 'react'
import Logo from './Logo'
import Nav from '../Nav/Nav'

const Header = props => {
  const { style, items, logo } = props
  const { url, alt } = logo
  return (
        <header style={style.header}>
        <Logo style={style} url={url} alt ={alt}/>
        <Nav style={style} items={items}/>
        </header>
  )
}

Header.defaultProps = {
  style: {
    header: {},
    logoImg: {},
    nav: {},
    ul: {},
    navItemLink: {}
  },
  items: [
    { section: 'Home', url: '/' },
    { section: 'About us', url: '/about' }
  ],
  logo: {
    url: 'https://ftsdlskits.com/wp-content/uploads/2018/12/Paris-Saint-Germain-PSG-Logo-512%C3%97512-URL.png',
    alt: 'Paris Saint Germain PSG Logo'
  }
}

export default Header
