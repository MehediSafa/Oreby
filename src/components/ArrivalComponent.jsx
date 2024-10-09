import React from 'react'

import { FaHeart,FaShoppingCart  } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";





const ArrivalComponent = ({item}) => {
   
  
  return (
  <div>



        <div className='flex justify-between'>
            <div className='w-[97%]'>
              <div className='relative group '>
              <img className='w-full' src={item.thumbnail} alt="" />
              <div className='absolute lg:top-[214px] top-[0px] lg:bottom-[2px] bottom-0 left-0 bg-white w-full opacity-0 group-hover:opacity-100'>
                    <div className=' flex gap-x-[20px] lg:pt-[25px] justify-end items-center h-[60px]'>
                    <h2 className='font-sans font-normal lg:text-[16px] text-[10px] text-[#767676]  '>Add to Wish List</h2>
                    <FaHeart className='me-[20px]'/>
                    </div>
                    <div className=' flex gap-x-[20px] lg:pt-[21px] lg:pb-[22px] justify-end items-center'>
                    <h2 className='font-sans font-normal lg:text-[16px] text-[10px] text-[#767676]'>Compare</h2>
                    <FaCodeCompare className='me-[20px] text-[#000]'/>
                    </div>
                    <div className=' flex gap-[20px] lg:pb-[11px] justify-end items-center'>
                    <h2 className='font-sans font-normal lg:text-[16px] text-[10px] text-[#262626]'>Add to Cart</h2>
                    <FaShoppingCart className='me-[20px]'/>
                    </div>
                    
                </div>
              </div>
              <div className='flex justify-between mt-[24px]'>
                    <h2 className='font-sans font-bold lg:text-[20px] text-[9px] text-[#262626]'>{item.title}</h2>
                    <p className='font-sans font-normal text-[16px] text-[#767676]'>{item.price}</p>
                </div>
                <p className='font-sans font-normal text-[16px] text-[#767676]'>{item.brand}</p>
            </div>
            {/* <div className='w-[24%]'>
            <div className='relative group  '>
              <img src={newarrival4 } alt=""  />
              <div className='absolute lg:top-[214px] top-[0px] lg:bottom-[2px] bottom-0 left-0 bg-white w-full opacity-0 group-hover:opacity-100'>
                    <div className=' flex gap-x-[20px] lg:pt-[25px] justify-end items-center h-[60px]'>
                    <h2 className='font-sans font-normal lg:text-[16px] text-[10px] text-[#767676]  '>Add to Wish List</h2>
                    <FaHeart className='me-[20px]'/>
                    </div>
                    <div className=' flex gap-[20px] lg:pt-[21px] lg:pb-[22px] justify-end items-center'>
                    <h2 className='font-sans font-normal lg:text-[16px] text-[10px] text-[#767676]'>Compare</h2>
                    <FaCodeCompare className='me-[20px] text-[#000]'/>
                    </div>
                    <div className=' flex gap-[20px] lg:pb-[11px] justify-end items-center'>
                    <h2 className='font-sans font-normal lg:text-[16px] text-[10px] text-[#262626]'>Add to Cart</h2>
                    <FaShoppingCart className='me-[20px]'/>
                    </div>
                    
                </div>
              </div>
              <div className='flex justify-between mt-[24px] '>
                    <h2 className='font-sans font-bold lg:text-[20px] text-[9px] text-[#262626]'>Basic Crew Neck Tee</h2>
                    <p className='font-sans font-normal text-[16px] text-[#767676]'>$44.00</p>
                </div>
            </div>
            <div className='w-[24%]'>
            <div className='relative group '>
              <img src={newarrival2} alt="" />
              <div className='absolute lg:top-[214px] top-[0px] lg:bottom-[2px] bottom-0 left-0 bg-white w-full opacity-0 group-hover:opacity-100'>
                    <div className=' flex gap-x-[20px] lg:pt-[25px] justify-end items-center h-[60px]'>
                    <h2 className='font-sans font-normal lg:text-[16px] text-[10px] text-[#767676]  '>Add to Wish List</h2>
                    <FaHeart className='me-[20px]'/>
                    </div>
                    <div className=' flex gap-[20px] lg:pt-[21px] lg:pb-[22px] justify-end items-center'>
                    <h2 className='font-sans font-normal lg:text-[16px] text-[10px] text-[#767676]'>Compare</h2>
                    <FaCodeCompare className='me-[20px] text-[#000]'/>
                    </div>
                    <div className=' flex gap-[20px] lg:pb-[11px] justify-end items-center'>
                    <h2 className='font-sans font-normal lg:text-[16px] text-[10px] text-[#262626]'>Add to Cart</h2>
                    <FaShoppingCart className='me-[20px]'/>
                    </div>
                    
                </div>
              </div>
              <div className='flex justify-between mt-[24px]'>
                    <h2 className='font-sans font-bold lg:text-[20px] text-[9px] text-[#262626]'>Basic Crew Neck Tee</h2>
                    <p className='font-sans font-normal text-[16px] text-[#767676]'>$44.00</p>
                </div>
            </div>

            <div className='w-[24%]'>
            <div className='relative group '>
              <img src={newarrival3} alt="" />
              <div className='absolute lg:top-[214px] top-[0px] lg:bottom-[2px] bottom-0 left-0 bg-white w-full opacity-0 group-hover:opacity-100'>
                    <div className=' flex gap-x-[20px] lg:pt-[25px] justify-end items-center h-[60px]'>
                    <h2 className='font-sans font-normal lg:text-[16px] text-[10px] text-[#767676]  '>Add to Wish List</h2>
                    <FaHeart className='me-[20px]'/>
                    </div>
                    <div className=' flex gap-[20px] lg:pt-[21px] lg:pb-[22px] justify-end items-center'>
                    <h2 className='font-sans font-normal lg:text-[16px] text-[10px] text-[#767676]'>Compare</h2>
                    <FaCodeCompare className='me-[20px] text-[#000]'/>
                    </div>
                    <div className=' flex gap-[20px] lg:pb-[11px] justify-end items-center'>
                    <h2 className='font-sans font-normal lg:text-[16px] text-[10px] text-[#262626]'>Add to Cart</h2>
                    <FaShoppingCart className='me-[20px]'/>
                    </div>
                    
                </div>
              </div>
              <div className='flex justify-between mt-[24px]'>
                    <h2 className='font-sans font-bold lg:text-[20px] text-[9px] text-[#262626]'>Basic Crew Neck Tee</h2>
                    <p className='font-sans font-normal text-[16px] text-[#767676]'>$44.00</p>
                </div>
            </div> */}
        </div>
  </div>
)
}

export default ArrivalComponent