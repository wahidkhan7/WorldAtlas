
import { Routes ,Route, createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Country from './pages/Country'
import AppLayout from './component/Layout/AppLayout'
import ErrorPages from './pages/ErrorPages'
import { CountryDetails } from './component/UI/CountryDetails'

const router = createBrowserRouter([
    {
      path: '/',
      element:<AppLayout/>,
      errorElement:<ErrorPages/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:"about",
          element:<About/>
        },
        {
          path:"contact",
          element:<Contact/>
        },
        {
          path:"country",
          element:<Country/>
        },
        {
          path:"country/:id",   // its is simple a path but : symbol indicate a dynamic path or route and id will store specific country name
          element:<CountryDetails/>

        }
      ]
    }
  ])
      
    function App(){
      return(
        <RouterProvider router ={router}></RouterProvider>

      )
    }
 

export default App
