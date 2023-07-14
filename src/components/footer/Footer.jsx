import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {SiTwitter} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Md Abdur Razzak</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/raju.aumed"><FaFacebookF/></a>
        <a href="#"><FiInstagram/></a>
        <a href="#"><SiTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Md Abdur Razzak. All right reserved</small>
      </div>
    </footer>
  )
}

export default Footer