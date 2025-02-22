import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
  const [show,setShow]=useState(false)
  function handleToggleButton(){
        setShow(!show)
  }
  return (
    <header>
         <div className="container">
            <div className="grid navbar-grid">
                <div className="logo">
                    <Link style={{ textDecoration: 'none'}} to="/">
                    <h1>World Atlas</h1>
                     </Link>
                </div>

                <nav className={show? "menu-mobile":"menu-web"}>
                    <ul>
                       
                       <li>
                        <Link  to ='/'>Home</Link>
                       </li>
                       <li>
                        <Link to ='/about'>About</Link>
                        </li>
                       <li>
                        <Link to ='/contact'>Contact</Link>
                        </li>
                       <li>
                        <Link to ='/country'>Country</Link>
                        </li>
                    </ul>
                </nav>

                <div className='ham-menu'>
                  <button onClick={handleToggleButton}>

                   <GiHamburgerMenu />
                  </button>


                </div>

            </div>
         </div>
    </header>
  )
}

export default Header