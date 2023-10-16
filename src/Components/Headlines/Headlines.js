import React from 'react'
import './headlines.css'
import { useNavigate } from 'react-router-dom'

const Headlines = ({headlines}) => {
 
  const navigate=useNavigate()

  const handleSelect=()=>
  {
   
    navigate(`/details/${headlines.title}`)
  }
  return (
    <>
      <div className="headlines" role='button' onClick={()=>handleSelect(headlines)}>
        <div className="info_wrapper">
            <p>{headlines.title}</p>
        </div>     
    </div>
    </>
  )
}

export default Headlines
