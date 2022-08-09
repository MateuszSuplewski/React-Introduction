import React from 'react'
import ContentLeft from './ContentLeft'
import ContentMain from './ContentMain'
import ContentRight from './ContentRight'
import Post from './Post'
import Category from './Category'
import Gallery from './Gallery'

class Content extends React.Component {
  render () {
    const { contentLeft, contentRight, contentMain, style } = this.props
    return (
    <article style={style.contentArticle}>
      <ContentLeft content={<Post postData={contentLeft} style={style.postContainer}/>}/>
      <ContentRight content = {<Category posts={contentRight} style={style} />}/>
      <ContentMain content = {<Gallery galleryItems={contentMain} style={style}/>}/>
    </article>
    )
  }
}

Content.defaultProps = {
  contentArticle: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap'
  },
  postContainer: {
    width: '50%'
  },
  categoryContainer: {
    width: '50%'
  },
  categorySinglePostContainer: {
    width: '100%'
  },
  galleryContainer: {
    display: 'flex',
    flexWrap: 'wrap'
  }
}

export default Content
