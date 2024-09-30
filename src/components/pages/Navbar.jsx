import React, { useState } from 'react';
import Container from '../Container';
import { HiMiniBars2 } from "react-icons/hi2";
import { IoMdSearch,IoMdClose  } from "react-icons/io";
import { FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <section id='navbar' className='bg-[#F5F5F3] py-[45px] border-t-[1px] border-t-[#979797] border-b-[1px] border-b-[#979797]'>
            <Container>
                <div className='flex flex-col lg:flex-row lg:justify-between items-center lg:gap-y-0 gap-y-3'>
                    <div className='lg:w-[20%] w-full flex items-center justify-between relative lg:gap-2 gap-4'>
                        <HiMiniBars2 className='cursor-pointer' onClick={() => setIsOpen(!isOpen)} />

                        <div className={`absolute top-[10px] left-0 mt-2 w-[200px] bg-[#262626] border border-[#2D2D2D] ${isOpen ? 'block' : 'hidden'} transition-opacity duration-300`}>
                            <ul>
                                <li className='w-full h-[50px] flex items-center px-4 font-sans font-normal text-[14px] border-b border-[#2D2D2D] hover:text-white hover:font-bold'>Accesories</li>
                                <li className='w-full h-[50px] flex items-center px-4 font-sans font-normal text-[14px] border-b border-[#2D2D2D] hover:text-white hover:font-bold'>Electronics</li>
                                <li className='w-full h-[50px] flex items-center px-4 font-sans font-normal text-[14px] border-b border-[#2D2D2D] hover:text-white hover:font-bold'>Clothes</li>
                                <li className='w-full h-[50px] flex items-center px-4 font-sans font-normal text-[14px] border-b border-[#2D2D2D] hover:text-white hover:font-bold'>Bags</li>
                                <li className='w-full h-[50px] flex items-center px-4 font-sans font-normal text-[14px] border-b border-[#2D2D2D] hover:text-white hover:font-bold'>Home appliances</li>
                            </ul>
                        </div>

                        <p className='font-sans font-normal text-[14px] text-[#262626]'>Shop by Category</p>
                    </div>

                    <div className='lg:w-[50%] w-full relative'>
                        <input type="text" placeholder='Search Products' className='border-none lg:indent-[21px] indent-3 w-full h-[50px]' />
                        <IoMdSearch className='absolute top-[50%] translate-y-[-50%] right-[30px] text-[1.26rem]' />
                    </div>

                    <div className='lg:w-[25%] w-full flex lg:justify-end justify-around items-center gap-3'>
                        <div className='flex'>
                            <FaUser />
                            <FaCaretDown />
                        </div>

                        <div className='relative '>
                            <FaShoppingCart className='cursor-pointer' onClick={() => setIsCartOpen(!isCartOpen)} />
                            <div className={`absolute top-[20px] right-0 ${isCartOpen ? 'block' : 'hidden'} bg-white border border-gray-300 shadow-lg`}>
                                <div className='w-[300px] h-[100px] bg-[#F5F5F3]'>
                                    <div className='flex'>
                                        <div className=' m-2 h-[80px] w-[80px] bg-[#D8D8D8] border-[1px] boder-[#979797]'>
                                  
                                               
                                        </div>
                                        <div className='ps-[20px]'>
                                        <h2 className='font-sans font-bold text-[14px] pt-[10px] pb-[14px]'>Black Smart Watch</h2>
                                        <h3 className='font-sans font-bold text-[14px] '>$44.00</h3>
                                        </div>
                                    </div>
                                        <div className='w-[300px] h-[100px] pt-[10px] border-[1px] boder-[#979797]'>
                                            <div className='m-2'>
                                                <span className='font-sans font-normal text-[16px] text-[#767676]'>Subtotal :</span>
                                                <span className='font-sans font-normal text-[16px] text-[#262626]'> $44.00</span>
                                                <div className='flex gap-2 pt-[15px]'>
                                                    <button className='' ><span className='px-[30px] py-[16px] border-[1px] border-[#2B2B2B] text-[#262626]hover:text-white hover:bg-[#262626] hover:text-white
                                                    '>View More</span></button>
                                                    <button className='' ><span className='px-[30px] py-[16px] border-[1px] border-[#2B2B2B] text-[#262626]hover:text-white hover:bg-[#262626] hover:text-white
                                                    '>Chechout</span></button>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Navbar;
