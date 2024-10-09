import React, { useEffect, useState } from 'react';
import Container from './Container';
import logo from '../assets/Logo.png';
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
    const [show, setShow] = useState(false);
   
    
    return (
        <section id='header' className='py-[32px]'>
            <Container>
                <div className='flex flex-col lg:flex-row'>
                    <div className='lg:w-1/4 w-full text-center lg:text-start'>
                        <img className='mx-auto lg:mx-0' src={logo} alt="Logo" />
                    </div>
                    <div className='lg:w-3/4 w-full lg:justify-start justify-center lg:visible invisible'>
                        <ul className='flex gap-x-[39px] ms-[100px]'>
                            <li className='font-sans font-bold text-[14px] text-[#767676] hover:text-[#262626]'>Home</li>
                            <li className='font-sans font-bold text-[14px] text-[#767676] hover:text-[#262626]'>Shop</li>
                            <li className='font-sans font-bold text-[14px] text-[#767676] hover:text-[#262626]'>About</li>
                            <li className='font-sans font-bold text-[14px] text-[#767676] hover:text-[#262626]'>Contacts</li>
                            <li className='font-sans font-bold text-[14px] text-[#767676] hover:text-[#262626]'>Journal</li>
                        </ul>
                    </div>


                    
                    <div  onClick={() => setShow(!show)} className='lg:hidden cursor-pointer text-[#262626] pb-[5px] flex justify-center '>
                        {show ? <RxCross1 className='cursor-pointer' /> : <FaBars className='cursor-pointer' />}
                    </div>
                    <div className={`z-50 absolute lg:hidden top-24 left-0 w-full bg-white flex flex-col items-center  ${show ? 'opacity-100' : 'opacity-0'}`}>
                        <ul>
                            <li className='pt-[10px] font-sans font-bold text-[14px] text-[#767676] hover:text-[#262626]'>Home</li>
                            <li className='pt-[10px] font-sans font-bold text-[14px] text-[#767676] hover:text-[#262626]'>Shop</li>
                            <li className='pt-[10px] font-sans font-bold text-[14px] text-[#767676] hover:text-[#262626]'>About</li>
                            <li className='pt-[10px] font-sans font-bold text-[14px] text-[#767676] hover:text-[#262626]'>Contacts</li>
                            <li className='pt-[10px] font-sans font-bold text-[14px] text-[#767676] hover:text-[#262626]'>Journal</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Header;
