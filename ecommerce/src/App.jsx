import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'

import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/Home',
      element: <Home />
    }
  ])
  return routes
}


const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </div>  
    </>
  )
}

export default App
