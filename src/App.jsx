import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from './context/AppContex'
import './App.css'
import Home from './components/home/Home'
import Login from './components/login/Login';
/* import Recargo from './components/recargo/recargo' */


function App() {
  const {logueado}=useContext(AppContext);
  
  return (
    <div className="App">
    {logueado?
      <BrowserRouter>
        <Routes>
          <Route exact path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      :
      <BrowserRouter>
        <Routes>  
          <Route exact path='/' element={<Login/>}/>        
          <Route exact path='/login' element={<Login/>}/>   
        {/*   <Route path='*' element={<Recargo/>}/>      */}    
        </Routes>
      </BrowserRouter>   
    }
     
    </div>
  )
}

export default App
