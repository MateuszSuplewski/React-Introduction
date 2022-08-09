import React from 'react'

class GalleryPhoto extends React.Component {
  render () {
    const { url, created, author } = this.props
    return (
      <figure>
        <img src={url}/>
        <figcaption>{created} : {author}</figcaption>
      </figure>
    )
  }
}

GalleryPhoto.defaultProps = {
  url: 'https://i.picsum.photos/id/1012/200/300.jpg?hmac=KU5TJQJkcv2lK_5lVNCie4evqxUOfFGp0Qsv2gQZo5k',
  created: 'Creation date',
  author: 'Default author'
}

export default GalleryPhoto
