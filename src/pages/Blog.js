import React, { Component } from 'react'

import Blogpost from '../pages/blogPost/Blogpost'

export default class Blog extends Component {
  render() {
    let {title, description, image, date, content} = this.props
    return (
      <div className='w-full h-full flex item-center justify-center'>      
        <div className='border-2 border-black  max-w-6xl flex items-center justify-center flex-wrap '>
        <Blogpost title={title} description={description} image={image} date={date} content={content} />
        <Blogpost title={title} description={description} image={image} date={date} content={content} />
        <Blogpost title={title} description={description} image={image} date={date} content={content} />
        <Blogpost title={title} description={description} image={image} date={date} content={content} />
          <Blogpost title={title} description={description} image={image} date={date} content={content} />
        </div>
      </div>
    )
  }
}
