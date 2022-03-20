import React from 'react'// Library react
import CV from '../../assets/cv.pdf'// импорт делает где pdf лежит

//CTA.jsx  pdf и кнопки
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA