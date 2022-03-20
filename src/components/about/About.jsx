/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {TiFolderOpen} from 'react-icons/ti'

const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about_container">
      <div className="about_me">
        <div className="about_me-image">
          <img src={ME} alt="About Image"/>
        </div>
      </div>

      <div className="about_content">
        <div className="about_cards">
          <article className="about_card">
          <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>1 Year working</small>
          </article>

          <article className="about_card">
          <FiUsers className='about_icon'/  >
            <h5>Client</h5>
            <small>Wordskils</small>
          </article>

          <article className="about_card">
          <TiFolderOpen className='about_icon'/>
            <h5>Projects</h5>
            <small>15+ Completed</small>
          </article>
        </div>

        <p>
        Hello. My name is
        Javlonbek. I'm a Fronted
        developer :) I've been
        programming for more
        than a year ! I'm currently
        studying to be a
        Programmer for the
        second year at MarSU.
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About