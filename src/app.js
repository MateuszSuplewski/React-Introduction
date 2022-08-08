import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import headerData from './stylesData/headerData'
import footerData from './stylesData/footerData'

const items = [
  { section: 'Home', url: '/' },
  { section: 'About us', url: '/about' },
  { section: 'Get in touch', url: '/contact' }
]

const logoParams = {
  url: 'https://ftsdlskits.com/wp-content/uploads/2018/12/Paris-Saint-Germain-PSG-Logo-512%C3%97512-URL.png',
  alt: 'Paris Saint Germain PSG Logo'
}

const copyrightsText = 'Copyright [Icon] All rights reserved by Mateusz Suplewski - @2022'

ReactDOM.render(
    <>
    <Header style={headerData} logo={logoParams} items={items} />
    <Footer style={footerData} copyrights={copyrightsText} items={items}/>
    </>,
    document.querySelector('#root')
)
