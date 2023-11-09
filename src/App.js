import './App.css';
import  Login  from './components/login/Login';
import "./App.css"
import { Routes, Route } from "react-router-dom";
import Forgot from './components/login/Forgot';


const App=()=> {
  return (<div className='App'>
    <Routes>
      <Route  path='/' element={<Login />}/>
      <Route path='/forgot' element={<Forgot/>}/>
    </Routes>
    
  </div>
                
  );
}

export default App;
