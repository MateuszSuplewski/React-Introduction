import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Content from '../Content/Content'
import Post from '../Content/Post'
import contentData from '../../stylesData/contentData'
import footerData from '../../stylesData/footerData'
import headerData from '../../stylesData/headerData'

const post = {
  title: 'Hello Page Post',
  body: 'Page post body! .....................',
  author: 'Made by page post',
  created: '2022-07-08'
}

const PagePost = () => {
  const { title, body, author, created } = post
  const { postContainer } = contentData
  return (
        <>
            <Header style={headerData}/>
            <Content 
            contentMain={<Post title={title} body={body} author={author} created={created} style={postContainer}/>} 
            contentLeft={<></>} contentRight={<></>} style={contentData}/>
            <Footer style={footerData}/>
        </>
  )
}

export default PagePost
