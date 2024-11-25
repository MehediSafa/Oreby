import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { PiGreaterThanLight } from "react-icons/pi";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Rate } from "antd";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Container from '../Container'
import {useDispatch} from 'react-redux'
import { addToCart } from '../../slice/productSlice';
const ProductDetails = () => {
    let productId = useParams()
    let [singleProduct, setSingleProduct] = useState({})
    let navigate = useNavigate()

    let [show, setShow] = useState(false)
    let [show1, setShow1] = useState(false)
    

    let dispatch = useDispatch()




    let getSingleProduct = () => {
        axios.get(`https://dummyjson.com/products/${productId.id}`).then((response => {
            setSingleProduct(response.data);

        }))

    }

    let handleCart = (item) => {
        dispatch(addToCart({...item, qun: 1}))
        toast("WelCome to Cart Page");
        setTimeout(()=>{
          navigate("/cart")
        },2000)
      };
    useEffect(() => {
        getSingleProduct();
    }, []);

    let clientRating = Array.from({ length: 5 }, (_, index) => {
        let number = index + 0.5
        return singleProduct.rating > index + 1 ? <FaStar className='text-[gold]' /> : singleProduct.rating > number ? <FaStarHalfAlt className='text-[gold]' /> : <FaRegStar className='text-[gold]' />

    })

    let discount = singleProduct.price - (singleProduct.price * singleProduct.discountPercentage / 100)


    return (

        <section id='product details'>
            <Container>
                <div className='flex gap-3 items-center pb-[136px]'>
                    <h2 className='cursor-pointer font-sans font-normal text-[14px] text-[#6D6D60]'> <Link to="/" >Home</Link></h2>
                    <PiGreaterThanLight className='text-[10px]' />
                    <h2 className='cursor-pointer font-sans font-normal text-[14px] text-[#6D6D60]'> <Link to='/Shop'>Shop</Link> </h2>


                </div>

                <div className='flex flex-wrap justify-between'>
                    {singleProduct?.images?.map((item) => (

                        <div className='w-[48%]  pt-[40px]'>
                            <img className='w-full' src={item} alt="" />
                        </div>
                    ))}




                </div>

                <div className='pt-[49px]'>
                    <h2 className='font-sans font-bold text-[24px] text-[#262626]'>Product</h2>
                    <div className='flex items-center pt-[18px] pb-[14px] gap-x-2'>
                        {clientRating}
                        {/* <FaStar />
                        <FaStarHalfAlt />
                        <FaRegStar /> |
                        <p className='font-sans font-normal text-[14px] text-[#767676]'>Reviews</p> */}
                    </div>
                    <div>
                        <del className='font-sans font-bold text-[24px] text-[#262626]'>Price: ${singleProduct.price}</del>
                        <p className='font-sans font-bold text-[24px] text-[#262626]'>Discounted Price: ${discount.toFixed(2)}</p>


                    </div>

                    <h3 className='font-sans font-bold text-[24px] text-[#262626]'>Status: {singleProduct.stock}</h3>
                    <div className='w-[400px] h-[100px] pt-[50px] pb-[50px] '>
                        <div className=' flex'>

                            <button className='pe-5' ><span className='px-[30px] py-[16px] border-[1px] border-[#2B2B2B] text-[#262626]hover:text-white hover:bg-[#262626] hover:text-white
                                                '>Add to Wishlist</span></button>
                            <button className='' ><span className='px-[30px] py-[16px] border-[1px] border-[#2B2B2B] text-[#262626]hover:text-white hover:bg-[#262626] hover:text-white'
                                onClick={()=>handleCart(singleProduct)}
                            >Add to Cart</span></button>
                        </div>
                    </div>



                    <div>
                        <div className='w-[50%] mt-[50px]'>

                            <div className='mb-[150px]'>
                                <div className='flex items-center justify-between ' onClick={() => setShow(!show)}>
                                    <h3 className='font-sans font-bold text-[24px] text-[#262626] '>FEATURES & DETAILS</h3>
                                    {show ? <span className='font-bold mt-[38px]'>-</span> : <span className='font-bold mt-[38px]'>+</span>}
                                </div>
                                {show && (

                                    <p className='font-sans font-normal text-[14px] text-[#767676] '>{singleProduct.description}</p>
                                )

                                }
                            </div>
                        </div>

                    </div>


                </div>
                {singleProduct &&
                    <Rate disabled value={singleProduct.rating} />

                }


                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                
/>
                
                <ToastContainer />
            </Container>
        </section>

    )
}

export default ProductDetails