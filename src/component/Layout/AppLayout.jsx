import React from 'react'
import Footer from '../UI/Footer'
import Header from '../UI/Header'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
   <> 
   <Header/>
   <Outlet/>  
   {/* means childer wala router sb ab outlet rahega and display hoga */}
   <Footer/>
   </>
  )
}

export default AppLayout