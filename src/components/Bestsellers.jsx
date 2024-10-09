import React from 'react'
import Container from './Container'
import bs1 from '../assets/bs1.png'
import bs2 from '../assets/bs2.png'
import bs3 from '../assets/bs3.png'
import bs4 from '../assets/bs4.png'

const Bestsellers = () => {
  return (
    <section id='bestsellers' className='py-[128px]'>
        <Container>
            <div className=" ">
                <h2 className='font-sans font-bold text-[39px] text-[#262626] pb-[48px]'>Our Bestsellers</h2>
                <div className='flex flex-wrap justify-between'>
                    <div className='w-24%'>
                        <img src={bs1} alt="" />
                        <div className='flex pt-[24px] justify-between items-center'>
                            <h2 className='font-sans font-bold text-[20px] text-[#262626]'>Basic Crew Neck Tee</h2>
                            <p className='font-sans font-normal text-[16px] text-[#767676]'> $44.00</p>
                        </div>
                        <h3 className='font-sans font-normal text-[16px] text-[#767676] pt-[15px]'>Black</h3>
                    </div>

                    <div className='w-24%'>
                        <img src={bs2} alt="" />
                        <div className='flex pt-[24px] justify-between items-center'>
                            <h2 className='font-sans font-bold text-[20px] text-[#262626]'>Basic Crew Neck Tee</h2>
                            <p className='font-sans font-normal text-[16px] text-[#767676]'> $44.00</p>
                        </div>
                        <h3 className='font-sans font-normal text-[16px] text-[#767676] pt-[15px]'>Black</h3>
                    </div>

                    <div className='w-24%'>
                        <img src={bs3} alt="" />
                        <div className='flex pt-[24px] justify-between items-center'>
                            <h2 className='font-sans font-bold text-[20px] text-[#262626]'>Basic Crew Neck Tee</h2>
                            <p className='font-sans font-normal text-[16px] text-[#767676]'> $44.00</p>
                        </div>
                        <h3 className='font-sans font-normal text-[16px] text-[#767676] pt-[15px]'>Black</h3>
                    </div>

                    <div className='w-24%'>
                        <img src={bs4} alt="" />
                        <div className='flex pt-[24px] justify-between items-center'>
                            <h2 className='font-sans font-bold text-[20px] text-[#262626]'>Basic Crew Neck Tee</h2>
                            <p className='font-sans font-normal text-[16px] text-[#767676]'> $44.00</p>
                        </div>
                        <h3 className='font-sans font-normal text-[16px] text-[#767676] pt-[15px]'>Black</h3>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Bestsellers