import React from 'react'
import Nav from '../Nav/Nav'
import Copyrights from './Copyrights'

const Footer = (props) => {
  const { style, items, copyrights } = props
  return (
        <footer>
            <Nav style={style} items={items} />
            <Copyrights style={style} text={copyrights}/>
        </footer>
  )
}

Footer.defaultProps = {
  nav: {},
  ul: {},
  navItemLink: {},
  navItemLi: {},
  copyrightsSection: {},
  copyrightsParagraph: {}
}

export default Footer
