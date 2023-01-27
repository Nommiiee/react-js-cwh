import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    let {title, description, image, date, content} = this.props
    console.log(title, description, image, date, content)
    return (
      <div className='w-full h-full flex item-center justify-center'>      
        <div className='border-2 border-black  max-w-6xl flex items-center justify-center flex-wrap '>
        <div className='w-11/12 md:w-6/12 lg:w-4/12 p-4 card'>
            <div className='w-full h-full rounded-2xl shadow-2xl border-2 border-black overflow-hidden'>
            <div className='w-full h-full overflow-hidden flex items-center justify-center'>

            <img className='w-full h-40 object-cover' src={image} alt={title} />
            </div>
            <div className='p-4'>

            <h1 className='text-xl font-semibold'>{title}</h1>
            <p className='mt-2 text-md'>{description}</p>
            <p className='mt-2 text-sm'>{date}</p>
            <p className='mt-2 text-lg'>{content}</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
