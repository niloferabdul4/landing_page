import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShareIcon from '@mui/icons-material/Share';
import { useNavigate } from 'react-router-dom';
import './card.css'

const Card = ({news}) => {
  const navigate=useNavigate()
  
  return (
    <div>
      <div className="card" role='button' onClick={()=>{navigate(`/details/${news.title}`)}}>
        <div className="image_wrapper">
            <img src={news.urlToImage} alt='' />
        </div>
        <div className="info_wrapper">
            <p>{news.title}</p>
        </div>
            <div className="btn_container">              
                   <button className='btn'>Read More ...</button>
           
            </div>
      </div>
    </div>
  )
}

export default Card
