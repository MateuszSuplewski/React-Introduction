import React from 'react'

const Logo = (props) => {
  const { url, alt, style } = props
  return (
      <img src={url} alt={alt} style={style.logoImg} />
  )
}

Logo.defaultProps = {
  url: 'https://ftsdlskits.com/wp-content/uploads/2018/12/Paris-Saint-Germain-PSG-Logo-512%C3%97512-URL.png',
  alt: 'Paris Saint Germain PSG Logo'
}

export default Logo
