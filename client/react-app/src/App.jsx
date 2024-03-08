import './App.css'
import AllRoutes from './AllRoutes'
import { BrowserRouter } from 'react-router-dom'
import Login from './Components/Login'
import { useEffect, useState } from 'react'

function App() {
  const [isauthorized, authorize] = useState(false)

  return (
    <>
    <Login authorize={authorize} />
    <button
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