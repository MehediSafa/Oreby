import React from 'react'
import Container from './Container'
import ad1 from '../assets/Ad_1.jpg'
import ad2 from '../assets/Ad_2.jpg'
import ad3 from '../assets/Ad_3.jpg'

const Ads = () => {
  return (
   <section id='ads' className='py-[140px]'>
        <Container>
        <div className='flex justify-between flex-wrap'>
        <div className='w-[49%]'>
            <img src={ad1} alt="" />
        </div>
        <div className='w-[50%]'>
            <div className='h-[50%]'>
                <img src={ad2} alt="" />
            </div>
            <div className='h-[50%] pt-[10px]'>
            <img src={ad3} alt="" />
            </div>
        </div>
        </div>
        </Container>
   </section>
  )
}

export default Ads