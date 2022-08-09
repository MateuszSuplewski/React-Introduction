import React from 'react'

class ContentLeft extends React.Component {
  render () {
    const { content } = this.props
    return (
      <>
        {content}
      </>
    )
  }
}

export default ContentLeft
