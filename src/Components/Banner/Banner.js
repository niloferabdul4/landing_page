import React from 'react'
import './banner.css'


const Banner = () => {
 
  return (
    <div>
      <div className="banner_container">
        <div className="banner_wrapper">
            <div className="banner_text">
               <h1 className='banner_title'>News Timez</h1>
                <small >{new Date().toDateString()}</small>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
