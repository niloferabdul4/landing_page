import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Categories from '../../Components/Categories/Categories'
import Feed from '../../Components/Feed/Feed'
import './home.css'
const Home = () => {
  return (
    <div>
      <div className="home_container">
         <Banner/>
        <Categories/>
        <Feed/>  
      </div>    
    </div>
  )
}

export default Home
