import React from 'react'// Library react
import { FiLinkedin } from "react-icons/fi";// icons import
import { FaGithub } from "react-icons/fa";// icons import
import { AiFillDribbbleCircle } from "react-icons/ai";// icons import

//сылки и иконки
const HeaderSocial = () => {
  return (
    <div className='headeer_socials'>
        <a href='https://linkedin.com' target='_blank'><FiLinkedin/></a>
        <a href='https://github.com' target='_blank'><FaGithub/></a>
        <a href='https://dribbble.com' target='_blank'><AiFillDribbbleCircle/></a>
    </div>
  )
}

export default HeaderSocial 