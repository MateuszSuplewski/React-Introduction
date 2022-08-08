import React from 'react'
import Logo from './Logo'
import Nav from './Nav'

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
  header: {},
  logoImg: {},
  nav: {},
  ul: {},
  navItemLink: {}
}

export default Header
