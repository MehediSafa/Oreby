import React from 'react'
import Container from './Container'
import watchads from '../assets/watchads.png'

const WatchAds = () => {
  return (
    <section id='watchadds' className='py-[128px]'>
        <Container>
            <img src={watchads} alt="" />
        </Container>
    </section>
  )
}

export default WatchAds