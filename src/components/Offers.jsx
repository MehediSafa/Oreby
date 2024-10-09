import React from 'react'
import Container from './Container'
import offers1 from '../assets/offers1.png'
import offers2 from '../assets/offers2.png'
import offers3 from '../assets/offers3.png'
import offers4 from '../assets/offers4.png'

const Offers = () => {
  return (
    <section id='offers' className='py-[128px]'>
        <Container>
        <div className=" ">
                <h2 className='font-sans font-bold text-[39px] text-[#262626] pb-[48px]'>Special Offers</h2>
                <div className='flex flex-wrap justify-between'>
                    <div className='w-24%'>
                        <img src={offers1} alt="" />
                        <div className='flex pt-[24px] justify-between items-center'>
                            <h2 className='font-sans font-bold text-[20px] text-[#262626]'>Basic Crew Neck Tee</h2>
                            <p className='font-sans font-normal text-[16px] text-[#767676]'> $44.00</p>
                        </div>
                        <h3 className='font-sans font-normal text-[16px] text-[#767676] pt-[15px]'>Black</h3>
                    </div>

                    <div className='w-24%'>
                        <img src={offers2} alt="" />
                        <div className='flex pt-[24px] justify-between items-center'>
                            <h2 className='font-sans font-bold text-[20px] text-[#262626]'>Basic Crew Neck Tee</h2>
                            <p className='font-sans font-normal text-[16px] text-[#767676]'> $44.00</p>
                        </div>
                        <h3 className='font-sans font-normal text-[16px] text-[#767676] pt-[15px]'>Black</h3>
                    </div>

                    <div className='w-24%'>
                        <img src={offers3} alt="" />
                        <div className='flex pt-[24px] justify-between items-center'>
                            <h2 className='font-sans font-bold text-[20px] text-[#262626]'>Basic Crew Neck Tee</h2>
                            <p className='font-sans font-normal text-[16px] text-[#767676]'> $44.00</p>
                        </div>
                        <h3 className='font-sans font-normal text-[16px] text-[#767676] pt-[15px]'>Black</h3>
                    </div>

                    <div className='w-24%'>
                        <img src={offers4} alt="" />
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

export default Offers