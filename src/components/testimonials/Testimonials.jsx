import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


// core version + navigation, pagination modules:
import {Pagination, Scrollbar} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react'
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Nuna Ama McBrown',
    review: 'It is always a pleasure working with Shahed. Works to get things the way we wanted them. Very happy and look forward working again together for future projects we may have.'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Shahed has good communication and work ethic. I would recommend his services to others and will continue to work with seller on expanding my website features. Thank you again.'
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'I have made over 200 purchases on Fiverr and this was the best transaction out of all of them. The seller delivered top notch service and went above and beyond to help me get my store started.'
  },
  {
    avatar: AVTR4,
    name: 'Tine Snow',
    review: 'Very professional service, delivered on time. Shahed communicates well at every stage to check I am happy, using videos to show changes, which is great for a website beginner like me definitely would recommend.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review form clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable: true}}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                <img src={avatar}/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
