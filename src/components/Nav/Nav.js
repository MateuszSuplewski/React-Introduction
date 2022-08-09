import React from 'react'
import NavItem from './NavItem'

const Nav = (props) => {
  const { items, style } = props
  return (
        <nav style={style.nav}>
            <ul style={style.ul}>
            {items.map(item => {
              const { url, section } = item
              return <NavItem url={url} text={section} key={section} style={style} />
            })}
        </ul>
        </nav>
  )
}

Nav.defaultProps = {
  items: [
    { section: 'Home', url: '/' },
    { section: 'About us', url: '/about' }
  ]
}

export default Nav
