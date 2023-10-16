
import Home from "./Pages/Home/Home";
import { Routes,Route } from "react-router-dom";
import NewsDetails from "./Pages/NewsDetails/NewsDetails";

function App() {
  return (
    <div className="App">
        
        <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path='/details/:title'  element={<NewsDetails/>}  />
        </Routes>
        
    </div>
  );
}

export default App;
