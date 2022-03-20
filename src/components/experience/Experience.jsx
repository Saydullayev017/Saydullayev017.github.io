import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        <div className='experience_fronted'>
          <h3>Fronted Developer</h3>
          <div className='experience_contant'>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icons'/>
                <div>
                 <h4>HTML</h4>
                 <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icons'/>
                <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
                </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icons'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icons'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icons'/>
              <div>
              <h4>Tailwind</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icons'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience_backend'>
          <h3>Beckend Development</h3>
          <div className='experience_contant'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
              <h4>SQL</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience