import React from 'react'
import Category from './Category'
import ContentLeft from './ContentLeft'
import ContentMain from './ContentMain'
import ContentRight from './ContentRight'
import Gallery from './Gallery'
import Post from './Post'

class Content extends React.Component {
  render () {
    const { contentLeft, contentRight, contentMain, style } = this.props
    const { contentArticle } = style
    return (
    <article style={contentArticle}>
      <ContentLeft content={contentLeft}/>
      <ContentRight content = {contentRight}/>
      <ContentMain content = {contentMain}/>
    </article>
    )
  }
}

Content.defaultProps = {
  style: {
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
  },
  contentLeft: <Post/>,
  contentRight: <Category/>,
  contentMain: <Gallery/>
}

export default Content
