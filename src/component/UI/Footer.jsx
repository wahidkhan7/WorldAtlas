import React from 'react'
import FooterData from "../../api/FooterApi.json"
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { Link } from 'react-router-dom';

const footerIcon = {
  MdPlace:<MdPlace/>,
  IoCallSharp:<IoCallSharp/>,
  TbMailPlus:<TbMailPlus/>

}



const Footer = () => {
  return (
   <footer className='footer-section'>
    <div className='container grid grid-three-cols'>
      {
        FooterData.map((currElem,index)=>{
          let {icon,title,details} = currElem
          return(
            <div className='footer-contact' key={index}>
              <div className='icon'>{footerIcon[icon]}</div>
              <div className='footer-contact-text'>
                <p>{title}</p>
                <p>{details}</p>
              </div>
             </div>

          )
        })
      }
     </div>
   <div className='copyright-area'>
    <div className='container'>
      <div className='grid grid-two-cols'>
      <div className='copyright-text'>
        <p>Copyright @copy; 2025,all Rights are reserved </p>
      </div>

      <div className='footer-menu'>
        <ul>
          <li><Link   to="/" >Home</Link></li>
          <li><Link to="https://www.instagram.com" target='_blank'>social</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          
        </ul>
      </div>
      </div>
      </div>

   </div>

   </footer>
  )
}

export default Footer