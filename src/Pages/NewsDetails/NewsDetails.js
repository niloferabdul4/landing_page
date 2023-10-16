import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../Context/AppContext'
import './details.css'
import Banner from '../../Components/Banner/Banner'
import Categories from '../../Components/Categories/Categories'

const NewsDetails = () => {
    const {state:{data,videoDetails,category,headlines},dispatch}=useContext(Context)
    const {title}=useParams()
   // console.log(title)
   
    useEffect(()=>{
        const details=data.find(news=>String(news.title)===String(title))
        dispatch({type:'LOAD_DETAILS',payload:details})
       
    },[title])
    //console.log(videoDetails)
  return (
    <div>
      <Banner/>
     <div className="details_container">
         <div className="wrapper">           
            <h1>{videoDetails?.title}</h1>
            <p>{videoDetails?.description}</p>
            <small>{`Category: ${category}`}</small>
            <img className='image_large' src={videoDetails?.urlToImage} alt=''  />
            <p>{videoDetails?.author}</p>
            <p>{videoDetails?.content}</p>
          </div>
         
     </div> 
    </div>
  )
}

export default NewsDetails
