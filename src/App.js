import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'

import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'

function App() {
  
  return (
    <div className="app">
      <div className='col-lg-11 m-auto'>
      <Navbar />
      <Routes >
          <Route path='/' element={<Home />}/>
          <Route path='/user/signup' element={<SignUp />}/>
          <Route path='/user/login' element={<Login />}/>
      </Routes>
      </div>
    </div>
  )
}

export default App;
