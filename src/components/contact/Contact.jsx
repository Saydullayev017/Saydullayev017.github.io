import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {BiMessageRounded} from 'react-icons/bi'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nz5xd6k', 'template_zbx81ae', form.current, '4wcgRwoMnmpafUlDQ')

    e.target.reset()
  };
  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>


    <div className='container contact_container'>
      <div className='contact_options'>
        <article className='contact_option'>
        <MdOutlineMail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>saydullayevjavlonbek2002@gmail.com</h5>
          <a href='mailto:saydullayevjavlonbek2002@gmail.com' target="_blank">Send a message</a>
        </article>

        <article className='contact_option'>
        <BsInstagram className='contact_option-icon'/>
          <h4>Messager</h4>
          <h5>saydullayev_017</h5>
          <a href='https://www.instagram.com/saydullayev_017/' target="_blank">Send a message</a>
        </article>

        <article className='contact_option'>
        <BiMessageRounded className='contact_option-icon'/>
          <h4>VK</h4>
          <h5>Javlonbek Saydullayev</h5>
          <a href='https://m.vk.com/saydullayev_017' target="_blank">Send a message</a>
        </article>
      </div>
      {/*END OF CONTACT OPTIONS*/}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Full Name" required/>
        <input type="email" name="emairefl" placeholder="Your Email" required/>
        <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
        <button type='sumbit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
    </section>  
  )
}

export default Contact

//ref={form} onSubmit={sendEmail}