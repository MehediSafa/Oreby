import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
import logo from '../assets/OREBI©.png'
import { FaFacebookF,FaLinkedinIn,FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <section id='footer' className='pt-[128px] bg-[#F5F5F3]'>
       <Container>
       <div className='flex justify-between '>
            <div className='w-[20%]'>
                <ul className='flex flex-col'>
                    <li className='font-sans font-bold text-[16px] text-[#262626] pb-[10px]'>Menu</li>
                    <Link to='/' className='font-sans font-normal text-[14px] text-[#6D6D6D] pb-[5px]'>Home</Link>
                    <Link to='shop'  className='font-sans font-normal text-[14px] text-[#6D6D6D] pb-[5px]'>Shop</Link>
                    <li className='font-sans font-normal text-[14px] text-[#6D6D6D] pb-[5px]'>About</li>
                    <li className='font-sans font-normal text-[14px] text-[#6D6D6D] pb-[5px]'>Contact</li>
                    <li className='font-sans font-normal text-[14px] text-[#6D6D6D] pb-[5px]'>Journal</li>
                </ul>
            </div>

            <div className='w-[20%]'>
            <ul className='flex flex-col'>
                    <li className='font-sans font-bold text-[16px] text-[#262626] pb-[10px]'>Shop</li>
                    
                    <li className='font-sans font-normal text-[14px] text-[#6D6D6D] pb-[5px]'>Category</li>
                    <li className='font-sans font-normal text-[14px] text-[#6D6D6D] pb-[5px]'>Category</li>
                    <li className='font-sans font-normal text-[14px] text-[#6D6D6D] pb-[5px]'>Category</li>
                    <li className='font-sans font-normal text-[14px] text-[#6D6D6D] pb-[5px]'>Category</li>
                    <li className='font-sans font-normal text-[14px] text-[#6D6D6D] pb-[5px]'>Category</li>
                </ul>
            </div>

            <div className='w-[20%]'>
                    <ul>
                        <li className='font-sans font-bold text-[16px] text-[#262626] pb-[10px]'>(052) 611-5711</li>
                        <li className='font-sans font-bold text-[16px] text-[#262626] pb-[10px]'>company@domain.com</li>
                        <li className='font-sans font-normal text-[14px] text-[#6D6D6D] pb-[5px]'> 575 Crescent Ave. Quakertown, PA 18951 </li>
                    </ul>
            </div>

            <div className='w-[20%]'>
                <img src={logo} alt="" />
            </div>

          

            
        </div>
        <div className='flex justify-between pt-[65px] pb-[59px]'>
            <div className='flex items-center gap-[10px]'>
            <FaFacebookF/>
            <FaLinkedinIn />
            <FaInstagram />
            </div>

            <div>
                <h2 className='font-sans font-normal text-[14px] text-[#6D6D6D]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</h2>
            </div>
        </div>
       </Container>
    </section>
  )
}

export default Footer