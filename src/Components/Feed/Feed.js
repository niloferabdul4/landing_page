import React,{useContext,useEffect,useState} from 'react'
import { Context } from '../../Context/AppContext'
import Card from '../Card/Card'
import Headlines from '../Headlines/Headlines'
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import './feed.css'


const Feed = () => {   
    
  const {state:{data,headlines,category},dispatch}=useContext(Context)
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages,setTotalPages]=useState(1)
  const itemsPerPage=4;
  const lastIndex=currentPage*itemsPerPage;
  const firstIndex=lastIndex-itemsPerPage
  useEffect(()=>{
       
       fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=da1e68127a80477cabcb47e54f707269`)
       .then(response=>response.json())
       .then(response=> {
                        dispatch({type:'LOAD_DATA',payload:response.articles})      
                        const total=Math.ceil(data.length / itemsPerPage)
                        setTotalPages(total)
                        
                       })
      
  },[category])
   useEffect(()=>{
  fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=da1e68127a80477cabcb47e54f707269`)
  .then(response=>response.json())
  .then(response=> {
                   dispatch({type:'LOAD_HEADLINES',payload:response.articles})             
                  })
 
},[])
console.log(data)
 
  //console.log(data)
  return (
    <>
     <div className="feed_container">
      <span style={{display:'flex',flexDirection:'column',gap:'30px',flex:'0.75'}}>
      <ResponsivePagination
                    current={currentPage}
                    total={totalPages}
                    onPageChange={setCurrentPage}
                    
                    
    />
         <div className="card_container">
            {data?.slice(firstIndex,lastIndex).map(item=>{return <>
                    <Card key={item.id} news={item}/>
                  </>})}
           
          </div>
         
    </span>
          <div className="headlines_container">
            <h2>{`India News`}</h2>
              {headlines?.slice(0,7).map(item=>{return <>
                <Headlines key={item.id} headlines={item}/>
              </>})}
          </div>
         
     </div> 

    </>
  )
}

export default Feed
