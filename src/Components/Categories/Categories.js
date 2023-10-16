import React, { useContext } from 'react'
import { Context } from '../../Context/AppContext';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import './categories.css'
const Categories= () => {

    const{dispatch}=useContext(Context)
    const menu_items=[ {id:1,title:'All news',category:'general'},
                        {id:2,title:'Business',category:'business'},
                        {id:3,title:'Entertainment',category:'entertainment'},
                        {id:4,title:'Sports',category:'sports'},
                        {id:5,title:'Health',category:'health'},
                        {id:6,title:'Science',category:'science'}
                    ]

        const handleCategory=(selectedItem)=>{
            
           dispatch({type:'SET_CATEGORY',payload:selectedItem.category})
           
        }
  return (
    <div>
        <div className="nav">
            <div className="nav_wrapper">
               
                        {menu_items.map(item=>{return <>
                            <ul>
                            <li onClick={()=>handleCategory(item)}>{item.title}</li> 
                            </ul>       
                    </>})}
              
            </div>
            
        </div>
     
    </div>
  )
}

export default Categories
