import React from 'react'// Library react
import './header.css'// импортирую > header.css
import CTA from './CTA'// импортирую > CTA.jsx  pdf и кнопки
import Me from '../../assets/me.png'// импортирую фотографию
import HeaderSocial from './HeaderSocial';// импортирую > сылки и иконки


const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I am</h5>
        <h2>Saydullayev Javlonbek</h2>
        <h5 className="text_light">Fronted Developer</h5>
        <CTA />  {/* тут pdf и кнопки*/}
        <HeaderSocial /> {/* тут сылки и иконки*/}
      <div className='me'>
        <img src={Me} alt='me' /> {/* IMG */}
      </div>

      <a href='#contact' className='scroll_down'>Scrolll Down</a>
      </div>
    </header>
  )
}

export default Header