import React from 'react'

class Post extends React.Component {
  render () {
    const { title, body, author, created, style } = this.props
    return (
      <div style={style}>
        <h4>{title}</h4>
        <h5>{body}</h5>
        <p>{author} : {created}</p>
      </div>
    )
  }
}

Post.defaultProps = {
  title: 'Default Title',
  body: 'Default Description',
  author: 'Default Author Name and Surname',
  created: 'Creation date'
}

export default Post
