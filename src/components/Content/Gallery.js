import React from 'react'
import GalleryPhoto from './GalleryPhoto'

class Gallery extends React.Component {
  render () {
    const { galleryItems, style } = this.props
    return (
      <div style={style.galleryContainer}>
        {
          galleryItems.map(item => <GalleryPhoto url={item.url} created={item.created} author={item.author} key={item.url}/>)
        }
      </div>
    )
  }
}

Gallery.defaultProps = {
  galleryItems: [
    { url: 'https://i.picsum.photos/id/1012/200/300.jpg?hmac=KU5TJQJkcv2lK_5lVNCie4evqxUOfFGp0Qsv2gQZo5k', created: 'Creation date', author: 'Default author' },
    { url: 'https://i.picsum.photos/id/658/200/300.jpg?hmac=K1TI0jSVU6uQZCZkkCMzBiau45UABMHNIqoaB9icB_0', created: 'Creation Date', author: 'Default author' }
  ]
}

export default Gallery
