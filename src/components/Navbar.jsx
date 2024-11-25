import React, { useEffect, useRef, useState } from 'react';
import Container from './Container';
import { HiMiniBars2 } from "react-icons/hi2";
import { IoMdSearch, IoMdClose } from "react-icons/io";
import { FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isOpenRef = useRef(false)

    const [isCartOpen, setIsCartOpen] = useState(false);
    const isCartOpenRef = useState(false)
    const [isLogin, setIsLogin] = useState(false)
    const isLoginref = useRef(false)
    
    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (isOpenRef.current.contains(e.target)) {
                setIsOpen(!isOpen)
            }
            else {
                setIsOpen(false)
            }

            if (isCartOpenRef.current.contains(e.target)) {
                setIsCartOpen(!isCartOpen)
            }
            else {
                setIsCartOpen(false)
            }
            if (isLoginref.current.contains(e.target)) {
                setIsLogin(!isLogin)
            }
            else {
                setIsLogin(false)
            }
        });
    }, [isOpen, isCartOpen,isLogin])





    return (
        <section id='navbar' className='bg-[#F5F5F3] py-[45px] border-t-[1px] border-t-[#979797] border-b-[1px] border-b-[#979797]'>
            <Container>
                <div className='flex flex-col lg:flex-row lg:justify-between items-center lg:gap-y-0 gap-y-3'>
                    <div ref={isOpenRef} className=' cursor-pointer lg:w-[20%] w-full flex items-center  lg:gap-2 gap-4 relative'>
                        <HiMiniBars2 className=' ps-[2px]' />



                        <p className='font-sans font-normal text-[14px] text-[#262626]'>Shop by Category</p>
                    </div>

                    {isOpen &&
                        (
                            <div className=' bg-[#262626] absolute left-[192px] top-[170px] z-10'>
                                <ul>
                                    <li className='w-full h-[50px] flex items-center px-4 font-sans font-normal text-[14px] text-white border-b border-[#2D2D2D] hover:text-white hover:font-bold'>Accesories</li>
                                    <li className='w-full h-[50px] flex items-center px-4 font-sans font-normal text-[14px]  text-white border-b border-[#2D2D2D] hover:text-white hover:font-bold'>Electronics</li>
                                    <li className='w-full h-[50px] flex items-center px-4 font-sans font-normal text-[14px]  text-white border-b border-[#2D2D2D] hover:text-white hover:font-bold'>Clothes</li>
                                    <li className='w-full h-[50px] flex items-center px-4 font-sans font-normal text-[14px]  text-white border-b border-[#2D2D2D] hover:text-white hover:font-bold'>Bags</li>
                                    <li className='w-full h-[50px] flex items-center px-4 font-sans font-normal text-[14px]  text-white border-b border-[#2D2D2D] hover:text-white hover:font-bold'>Home appliances</li>
                                </ul>
                            </div>
                        )
                    }

                    <div className='lg:w-[50%] w-full relative'>
                        <input type="text" placeholder='Search Products' className='border-none lg:indent-[21px] indent-3 w-full h-[50px]' />
                        <IoMdSearch className='absolute top-[50%] translate-y-[-50%] right-[30px] text-[1.26rem]' />
                    </div>

                    <div className='lg:w-[25%] w-full flex lg:justify-end justify-around items-center gap-3'>
                        <div className='flex relative'>
                            {/* login dropdown  */}
                           <div  ref={isLoginref} className='flex'>
                           <FaUser />
                            <FaCaretDown />
                           </div>
                             {/* login area */}
                           { isLogin && (
                           
                            <div className=' absolute top-[23px] left-[-106px] flex flex-col z-50'>
                            <a href="" className='font-sans font-bold text-[14px] px-[40px] py-[10px] bg-[#262626] text-white hover:text-[#262626] hover:bg-white'>Login</a>
                            <a href="" className='font-sans font-bold text-[14px]  px-[40px] py-[10px] bg-[#262626] text-white hover:text-[#262626] hover:bg-white'>Sign Up</a>
                            </div>
                           )

                           }
                        </div>

                        <div className='cursor-pointer relative' ref={isCartOpenRef}>
                            {/* shopping cart togglebar */}
                            <div>
                                <FaShoppingCart />
                            </div>
                            {
                                isCartOpen && (
                                    <div className='z-20 absolute top-[32px] right-[-53%]'>
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
                                )
                            }

                        </div>

                    </div>

                </div>
            </Container>

           
        </section>
    );
}

export default Navbar;



// import React, { useEffect, useRef, useState } from 'react';
// import Container from '../Container';
// import { HiMiniBars2 } from "react-icons/hi2";
// import { IoMdSearch } from "react-icons/io";
// import { FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const dropdownRef = useRef(null); // Ref for category dropdown
//     const [isCartOpen, setIsCartOpen] = useState(false);
//     const cartRef = useRef(null); // Ref for cart dropdown

//     const handleDropdownClick = (e) => {
//         e.stopPropagation(); // Prevent event from bubbling up
//         setIsOpen((prev) => !prev);
//     };

//     const handleCartClick = (e) => {
//         e.stopPropagation(); // Prevent event from bubbling up
//         setIsCartOpen((prev) => !prev);
//     };

//     const handleClickOutside = (event) => {
//         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//             setIsOpen(false);
//         }
//         if (cartRef.current && !cartRef.current.contains(event.target)) {
//             setIsCartOpen(false);
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     return (
//         <section id='navbar' className='bg-[#F5F5F3] py-[45px] border-t-[1px] border-t-[#979797] border-b-[1px] border-b-[#979797]'>
//             <Container>
//                 <div className='flex flex-col lg:flex-row lg:justify-between items-center lg:gap-y-0 gap-y-3'>
//                     <div ref={dropdownRef} className='cursor-pointer lg:w-[20%] w-full flex items-center lg:gap-2 gap-4 relative' onClick={handleDropdownClick}>
//                         <HiMiniBars2 className='ps-[2px]' />
//                         <p className='font-sans font-normal text-[14px] text-[#262626]'>Shop by Category</p>
//                     </div>

//                     {isOpen && (
//                         <div className='bg-[#262626] absolute left-[192px] top-[170px] z-20'>
//                             <ul>
//                                 <li className='w-full h-[50px] flex items-center px-4 font-sans font-normal text-[14px] text-white border-b border-[#2D2D2D] hover:text-white hover:font-bold'>Accessories</li>
//                                 <li className='w-full h-[50px] flex items-center px-4 font-sans font-normal text-[14px] text-white border-b border-[#2D2D2D] hover:text-white hover:font-bold'>Electronics</li>
//                                 <li className='w-full h-[50px] flex items-center px-4 font-sans font-normal text-[14px] text-white border-b border-[#2D2D2D] hover:text-white hover:font-bold'>Clothes</li>
//                                 <li className='w-full h-[50px] flex items-center px-4 font-sans font-normal text-[14px] text-white border-b border-[#2D2D2D] hover:text-white hover:font-bold'>Bags</li>
//                                 <li className='w-full h-[50px] flex items-center px-4 font-sans font-normal text-[14px] text-white border-b border-[#2D2D2D] hover:text-white hover:font-bold'>Home Appliances</li>
//                             </ul>
//                         </div>
//                     )}

//                     <div className='lg:w-[50%] w-full relative'>
//                         <input type="text" placeholder='Search Products' className='border-none lg:indent-[21px] indent-3 w-full h-[50px]' />
//                         <IoMdSearch className='absolute top-[50%] translate-y-[-50%] right-[30px] text-[1.26rem]' />
//                     </div>

//                     <div className='lg:w-[25%] w-full flex lg:justify-end justify-around items-center gap-3'>
//                         <div className='flex'>
//                             <FaUser />
//                             <FaCaretDown />
//                         </div>

//                         <div ref={cartRef} className='relative'>
//                             <FaShoppingCart className='cursor-pointer' onClick={handleCartClick} />
//                             {isCartOpen && (
//                                 <div className='absolute top-[20px] right-0 z-40 bg-[#F5F5F3]'>
//                                     <div className='w-[300px] h-[100px] bg-[#F5F5F3]'>
//                                         <div className='flex'>
//                                             <div className='m-2 h-[80px] w-[80px] bg-[#D8D8D8] border-[1px] border-[#979797]'></div>
//                                             <div className='ps-[20px]'>
//                                                 <h2 className='font-sans font-bold text-[14px] pt-[10px] pb-[14px]'>Black Smart Watch</h2>
//                                                 <h3 className='font-sans font-bold text-[14px] '>$44.00</h3>
//                                             </div>
//                                         </div>
//                                         <div className='w-[300px] h-[100px] pt-[10px] border-[1px] border-[#979797]'>
//                                             <div className='m-2'>
//                                                 <span className='font-sans font-normal text-[16px] text-[#767676]'>Subtotal :</span>
//                                                 <span className='font-sans font-normal text-[16px] text-[#262626]'> $44.00</span>
//                                                 <div className='flex gap-2 pt-[15px]'>
//                                                     <button className=''><span className='px-[30px] py-[16px] border-[1px] border-[#2B2B2B] text-[#262626] hover:text-white hover:bg-[#262626]'>View More</span></button>
//                                                     <button className=''><span className='px-[30px] py-[16px] border-[1px] border-[#2B2B2B] text-[#262626] hover:text-white hover:bg-[#262626]'>Checkout</span></button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </Container>
//         </section>
//     );
// }

// export default Navbar;

