import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Content from '../Content/Content'
import Gallery from '../Content/Gallery'
import contentData from '../../stylesData/contentData'
import footerData from '../../stylesData/footerData'
import headerData from '../../stylesData/headerData'

const galleryItems = [
  { url: 'https://i.picsum.photos/id/62/200/300.jpg?hmac=Ova5b3XqMVygL4ZvFJ1MfAehiXKiM1Ol14jN_6widUY', created: '2022-08-07', author: 'Page gallery' },
  { url: 'https://i.picsum.photos/id/62/200/300.jpg?hmac=Ova5b3XqMVygL4ZvFJ1MfAehiXKiM1Ol14jN_6widUY', created: '2022-08-07', author: 'Page gallery' },
  { url: 'https://i.picsum.photos/id/62/200/300.jpg?hmac=Ova5b3XqMVygL4ZvFJ1MfAehiXKiM1Ol14jN_6widUY', created: '2022-08-07', author: 'Page gallery' }
]

const PageGallery = () => {
  return (
        <>
            <Header style={headerData}/>
            <Content contentMain={<Gallery galleryItems={galleryItems} style={contentData}/>} contentLeft={<></>} contentRight={<></>} style={contentData}/>
            <Footer style={footerData}/>
        </>
  )
}

export default PageGallery
