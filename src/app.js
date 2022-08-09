import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import headerData from './stylesData/headerData'
import footerData from './stylesData/footerData'
import Content from './components/Content/Content'
import contentData from './stylesData/ContentData'
import insertData from './insertData'

const {items, logoParams, copyrightsText, posts, post, galleryItems} = insertData

ReactDOM.render(
    <>
    <Header style={headerData} logo={logoParams} items={items} />
    <Content contentLeft={post} contentRight={posts} contentMain={galleryItems} style={contentData}/>
    <Footer style={footerData} copyrights={copyrightsText} items={items}/>
    </>,
    document.querySelector('#root')
)
