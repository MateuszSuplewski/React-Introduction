import React from 'react'

const Copyrights = (props) => {
  const { style, text } = props
  return (
    <section style={style.copyrightsSection}>
        <p style={style.copyrightsParagraph}>{text}</p>
    </section>
  )
}

Copyrights.defaultProps = {
  text: 'Copyright [Icon] All rights reserved by Mateusz Suplewski'
}

export default Copyrights
