import React from 'react'
import Post from './Post'

class Category extends React.Component {
  render () {
    const { posts, style } = this.props
    return (
    <div style={style.categoryContainer}>
      {posts.map((post, index) => {
        const { title, body, author, created } = post
        return <Post title={title} body={body} author={author} created={created} key={index} style={style.categorySinglePostContainer} />
      })}
    </div>
    )
  }
}

Category.defaultProps = {
  posts: [{
    title: 'Default post title 1',
    body: 'Just a description 1',
    author: 'Author data 1',
    created: 'Creation date 1'
  },
  {
    title: 'Default post title 2',
    body: 'Just a description 2',
    author: 'Author data 2',
    created: 'Creation date 2'
  }
  ]
}

export default Category
