import React from 'react'

class ContentMain extends React.Component {
  render () {
    const { content } = this.props
    return (
      <>
        {content}
      </>
    )
  }
}

export default ContentMain
