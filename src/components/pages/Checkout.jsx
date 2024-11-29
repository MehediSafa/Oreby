import React from 'react'
import Container from '../Container'
import  { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApiData } from '../ContextApi';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md'

const Checkout = () => {

  let cartInfo = useSelector((state) => state.product.cartItem);

  let { info, loading } = useContext(ApiData);
  let {totalPrice, totalQuantity,} = cartInfo.reduce((acc,item)=>{
    acc.totalPrice += item.price * item.qun;
    acc.totalQuantity += item.qun 
    return acc
  },{totalPrice:0,totalQuantity:0})
  return (
    <section>
        <Container>
        <h2 className='font-DM font-bold pt-5 text-[49px] text-[#262626]'>Checkout</h2>
   <div className=" items relative pb-[130px]">
   <span className='font-DM font-normal text-[12px] text-[#767676] pe-[14px]'>Home</span>
    <span className='font-DM font-normal text-[16px] text-[#767676]  absolute left-[8.2%] sm:left-[4.6%] lg:left-[3.2%] xl:left-[2.2%] top-2'> <MdKeyboardArrowRight />  </span>
    <span className='font-DM font-normal text-[12px] text-[#767676]' >Checkout</span>
   </div>
   <div className=" text-[39px] font-bold font-DM pb-8">
    <h2>Billing Details</h2>
   </div>
<form>
    <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name*</label>
            <input type="text" id="first_name" className="bg-white border-b focus:outline-none border-b-[#f0f0f0] text-[#767676]   w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="First name" required />
        </div>
        <div>
            <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name*</label>
            <input type="text" id="last_name"  className="bg-white border-b focus:outline-none border-b-[#f0f0f0] text-[#767676]   w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "  placeholder="Last name" required />
        </div>
    </div>
    <div className="mb-6">
        <label for="Company Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Companye Name (optional)</label>
        <input type="text" id="first_name"  className="bg-white border-b focus:outline-none border-b-[#f0f0f0] text-[#767676]   w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "  placeholder="Company Name" required/>
    </div>
         <div className="w-[100%] pt-8">
                  <h4 className='text-[14px] font-DMs font-medium text-sm  text-gray-900'>Country</h4>
                  <select className='border-b w-full py-2 focus:outline-none  '>
                      <option value=""  className="text-gray-400">Please select</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Canada">Canada</option>
                      <option value="UK">UK</option>
                      <option value="USA">USA</option>
                      <option value="Other">Other</option>
                  </select>
              </div>
     
    <div className="mb-6">
        <label for="Street Address *" className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">Street Address *</label>
        <input type="text" id="first_name"  className="bg-white border-b focus:outline-none border-b-[#f0f0f0] text-[#767676]   w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "  placeholder="House number and street name" required />
        <input type="text" id="first_name"  className="bg-white border-b focus:outline-none border-b-[#f0f0f0] text-[#767676]   w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "  placeholder="Apartment, suite, unit etc. (optional)" required />
    </div> 
    <div className="mb-6">
        <label for="Town/City *" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Town/City *</label>
        <input type="text" id="Town/City *"  className="bg-white border-b focus:outline-none border-b-[#f0f0f0] text-[#767676]   w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "  placeholder="Town/City *" required/>
    </div> 
    <div className="mb-6">
        <label for="County (optional)" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">County (optional)</label>
        <input type="text" id="first_name" className="bg-white border-b focus:outline-none border-b-[#f0f0f0] text-[#767676]   w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="County" required/>
    </div> 
    <div className="mb-6">
        <label for="Post Code *" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Post Code *</label>
        <input type="password" id="first_name"  className="bg-white border-b focus:outline-none border-b-[#f0f0f0] text-[#767676]   w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "  placeholder="Post Code" required/>
    </div> 
    <div className="mb-6 w-full">
        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address *</label>
        <input type="email" id="email"  className="bg-white border-b focus:outline-none border-b-[#f0f0f0] text-[#767676]   w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "  placeholder="Email" required />
    </div> 
</form>
<div className=" w-[30%] pb-9">
  
   <h2 className=" font-DM font-bold text-[39px] pb-3 capitalize ">Your Order</h2>
   
  
   </div>
   <div className="relative overflow-x-auto sm:rounded-lg pt-5">
                    <table className="w-[30%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-l border-b border-r border-t ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    Total
                                </th>

                            </tr>
                        </thead>
                        <tbody>

                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Subtotal
                                </th>
                                <tr>
                                <td className="px-6 py-4">
                                    {totalPrice} $
                                </td>

                            </tr>
                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Total
                                </th>
                                <td className="px-6 py-4">
                                    {totalPrice} $
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            <div className="w-[63%] p-10 border-2 mt-10 ">
                <div className=" flex gap-2 ">

                    <input  type="checkbox"  className="" id="" placeholder='' />
                    <h2 className='text-[16px] text-[#262626] font-DMs font-bold'>Bank</h2>

                </div>
                <p className='bg-[#F7F8F9] p-5 mt-5 text-[14px] text-[#767676] font-DMs font-normal'>Pay via Bank; you can pay with your credit card if you don’t have a Bank account.</p>

                <div className=" flex gap-2 mt-5">

                    <input name="bank2" type="checkbox" placeholder=''  />
                    <h2 className='text-[16px] text-[#262626] font-DMs font-bold'>Bank-2</h2>

                </div>
                <p className='bg-[#F7F8F9] p-5 mt-5 text-[14px] text-[#767676] font-DMs font-normal'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>

                <div className="">
                    <button className='py-3 px-16 bg-black border-[2px] border-[#262626] text-white mt-10 text-[18px] font-bold font-DMs hover:bg-white hover:text-black ease-in-out duration-300'>Proceed to Bank</button>
                </div>

            </div>
            <div>

            </div>
        </Container>
    </section>
  )
}

export default Checkout