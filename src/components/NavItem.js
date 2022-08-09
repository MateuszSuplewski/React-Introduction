import React from 'react'

const NavItem = (props) => {
  const { url, text, style } = props
  return (
        <li style={style.navItemLi}>
            <a href={url} style={style.navItemLink}>{text}</a>
        </li>
  )
}

Nav.defaultProps = {
 text: 'Default text', 
 url: '/'
}

export default NavItem
