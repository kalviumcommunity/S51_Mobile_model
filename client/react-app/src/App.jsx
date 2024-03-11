import './App.css'
import AllRoutes from './AllRoutes'
import { BrowserRouter } from 'react-router-dom'
import Login from './Components/Login'
import { useEffect, useState } from 'react'
import "./App.css"

function App() {
  const [isauthorized, authorize] = useState(false)

  return (
    <>
    <Login authorize={authorize} />
    <button id='logout'
    onClick={() => {
      authorize(false);
      document.cookie=`authtoken=${null}`
    }}>
    logout
    </button>
    <BrowserRouter>
      <AllRoutes isauthorized={isauthorized}/>
    </BrowserRouter>
    </>
  )
}

export default App