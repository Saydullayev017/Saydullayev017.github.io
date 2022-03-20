/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'
import {BsTelegram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
    <a href='#' className='footer_logo'>SJ</a>

    <ul>
      <li className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>about</a></li>
        <li><a href='#experience'>experience</a></li>
        <li><a href='#contact'>contact</a></li>
      </li>
    </ul> 

    <div className='footer_socials'>
      <a href='https://facebook.com'><FaFacebookF/></a>
      <a href='https://whatsapp.com'><IoLogoWhatsapp/></a>
      <a href='https://telegram.com'><BsTelegram/></a>
    </div>
    
    </footer>
  )
}

export default Footer