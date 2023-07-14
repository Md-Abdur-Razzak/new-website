import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'


// Dynamically change project details form here!
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'CSS Button Maker',
    github: 'https://github.com/Md-Abdur-Razzak/flowers-website',
    demo: 'https://md-abdur-razzak.github.io/flowers-website/'    
  },
  {
    id: 2,
    image: IMG2,
    title: 'This landing page is coming soon',
    github: 'https://github.com/Md-Abdur-Razzak/flowers-website',
    demo: 'https://md-abdur-razzak.github.io/flowers-website/'    
  },
  {
    id: 3,
    image: IMG3,
    title: 'This landing page is coming soon',
    github: 'https://github.com/Md-Abdur-Razzak/flowers-website',
    demo: 'https://md-abdur-razzak.github.io/flowers-website/'  
  }
]
// Dynamic end!

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Check My Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
