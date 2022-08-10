import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import headerData from './stylesData/headerData'
import footerData from './stylesData/footerData'
import Content from './components/Content/Content'
import contentData from './stylesData/contentData'
import dataToInsert from './dataToInsert'
import Gallery from './components/Content/Gallery'
import Post from './components/Content/Post'
import Category from './components/Content/Category'


const {items, logoParams, copyrightsText, posts, post, galleryItems} = dataToInsert
const {title,body,author,created} = post
const {postContainer} = contentData


ReactDOM.render(
    <>
    <Header style={headerData} logo={logoParams} items={items} />
    <Content 
        contentLeft={<Post title={title} body={body} author={author} created={created} style={postContainer}/>} 
        contentRight={<Category posts={posts} style={contentData} />} 
        contentMain = {<Gallery galleryItems={galleryItems} style={contentData}/>}
        style={contentData}
    />
    <Footer style={footerData} copyrights={copyrightsText} items={items}/>
    </>,
    document.querySelector('#root')
)
