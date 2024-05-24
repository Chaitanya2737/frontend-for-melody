import React from 'react'
import "./section.css"
const Section = ({content}) => {
  return (
    <div className='wrapper'>

    <p className='section'>
        {
            content
        }
    </p>
    </div>
  )
}

export default Section