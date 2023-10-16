const reducer=(state,action)=>{
    switch(action.type){
        case 'LOAD_DATA':
            return {...state,data:action.payload}
         case 'SET_CATEGORY':
                return {...state,category:action.payload} 
        case 'LOAD_DETAILS':
                return {...state,videoDetails:action.payload}
        case 'LOAD_HEADLINES':
                return {...state,headlines:action.payload}
        
        default :
        return state;
    }
}

export default reducer;