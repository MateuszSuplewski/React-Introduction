import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Content from '../Content/Content'
import Category from '../Content/Category'
import contentData from '../../stylesData/contentData'
import footerData from '../../stylesData/footerData'
import headerData from '../../stylesData/headerData'

const posts = [{
  title: 'Hello page category 1',
  body: 'Page category ..........',
  author: 'Made by page category',
  created: '202-07-08'
},
{
  title: 'Hello page category 2',
  body: 'Page category ..........',
  author: 'Made by page category',
  created: '202-07-08'
},
{
  title: 'Hello page category 3',
  body: 'Page category ..........',
  author: 'Made by page category',
  created: '202-07-08'
}
]

const PageCategory = () => {
  return (
        <>
            <Header style={headerData}/>
            <Content contentMain={<Category posts={posts} style={contentData} />} contentLeft={<></>} contentRight={<></>} style={contentData}/>
            <Footer style={footerData}/>
        </>
  )
}

export default PageCategory
