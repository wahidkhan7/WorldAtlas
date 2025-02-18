import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
         <div className="container">
            <div className="grid navbar-grid">
                <div className="logo">
                    <Link style={{ textDecoration: 'none'}} to="/">
                    <h1>World Atlas</h1>
                     </Link>
                </div>

                <nav>
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

            </div>
         </div>
    </header>
  )
}

export default Header