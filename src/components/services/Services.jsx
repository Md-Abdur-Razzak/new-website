import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* UI/UX design service */}
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive design</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Wireframes</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Prototype</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Include source file</p>
            </li>
          </ul>
        </article>

        {/* Web development service */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design customization</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Content upload</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Source code</p>
            </li>
          </ul>
        </article>

        {/* Content creation service */}
        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Page/channel evaluation</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Content creation</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Schedule posts</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Engagement with followers</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services