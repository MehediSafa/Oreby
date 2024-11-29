import React from 'react';
import  { useContext } from 'react';
import Container from '../Container';
import { IoIosArrowForward } from 'react-icons/io';
import { ImCross } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productIncrement, productDecrement, removeFromCart } from '../../slice/productSlice';
import { ApiData } from '../ContextApi';


const Cart = () => {
  let cartInfo = useSelector((state) => state.product.cartItem);

  let { info, loading } = useContext(ApiData);
  let {totalPrice, totalQuantity,} = cartInfo.reduce((acc,item)=>{
    acc.totalPrice += item.price * item.qun;
    acc.totalQuantity += item.qun 
    return acc
  },{totalPrice:0,totalQuantity:0})

  
  let dispatch = useDispatch();

  let handleIncrement = (i) => {
    dispatch(productIncrement(i));
  };

  let handleDecrement = (i) => {
    dispatch(productDecrement(i));
  };

  let handleRemove = (i) => {
    dispatch(removeFromCart(i));
  };



  return (
    <section className="py-[55px]">
      <Container>
        <div>
          <h3 className="font-sans text-[49px] font-bold text-[#262626]">Cart</h3>
          <div className="flex items-center py-4">
            <h2 className="font-sans font-normal text-[12px] text-[#767676]">
              <Link to="/">Home</Link>
            </h2>
            <IoIosArrowForward />
            <h2 className="font-sans font-normal text-[12px] text-[#767676]">
              <Link to="/shop">Shop</Link>
            </h2>
            <IoIosArrowForward />
            <h2 className="font-sans font-normal text-[12px] text-[#767676]">
              <Link to="/myaccount">Cart</Link>
            </h2>
          </div>
        </div>

        {cartInfo.length === 0 ? (
          <div className="py-10 text-center">
            <h4 className="font-sans text-[24px] font-bold text-[#262626]">No Items</h4>
          </div>
        ) : (
          <>
            <div className="flex items-center bg-[#F5F5F3] py-[32px] pl-3 border">
              <div className="w-1/4">
                <h4 className="font-sans font-bold text-[16px] text-[#262626]">Product</h4>
              </div>
              <div className="w-1/4">
                <h4 className="font-sans font-bold text-[16px] text-[#262626]">Price</h4>
              </div>
              <div className="w-1/4">
                <h4 className="font-sans font-bold text-[16px] text-[#262626]">Quantity</h4>
              </div>
              <div className="w-1/4">
                <h4 className="font-sans font-bold text-[16px] text-[#262626]">Total</h4>
              </div>
            </div>

            {cartInfo.map((item, i) => (
              <div className="my-2" key={item.id}>
                <div className="flex items-center py-[32px] pl-3 border">
                  <div className="w-1/4">
                    <div>
                      <div className="flex justify-between items-center">
                        <div className="w-[10%]">
                          <button onClick={() => handleRemove(i)} className="">
                            <ImCross />
                          </button>
                        </div>
                        <div className="w-[25%]">
                          <img src={item.thumbnail} alt="" className="w-full" />
                        </div>
                        <div className="w-[50%]">
                          <h3 className="font-sans font-bold text-[16px] text-[#262626]">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/4">
                    <h4 className="font-sans font-bold text-[16px] text-[#262626]">${item.price}</h4>
                  </div>
                  <div className="w-1/4">
                    <div className="inline-block border">
                      <button onClick={() => handleDecrement(i)} className="px-5 py-1 border-none">
                        -
                      </button>
                      <span className="px-4">{item.qun}</span>
                      <button onClick={() => handleIncrement(i)} className="px-5 py-1 border-none">
                        +
                      </button>
                    </div>
                  </div>
                  <div className="w-1/4">
                    <h4 className="font-sans font-bold text-[16px] text-[#262626]">
                      ${(item.qun * item.price).toFixed(2)}
                    </h4>
                  </div>
                </div>
              </div>
            ))}

            {/* cart details part */}
            <div className=' mt-4'>
                <div className='flex justify-end'>
                <div className='w-[30%]'>
                <h2 className='mb-3 text-end font-bold text-[20px] text-[#262626] capitalize '>Carts Details</h2>
                <div className="flex flex-col">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-start text-xs font-bold text-gray-500 uppercase ">Subtotal</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-bold text-gray-500 uppercase">${totalPrice.toFixed(2)}</th>
              
             
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-800">Quantity</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{totalQuantity}</td>
              
           
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-800">Total</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">${totalPrice.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
        <div className='text-end mt-4'>
            <Link to='/checkout'>
            <button
                        className="flex-1 px-[20px] py-[12px] text-[12px] border-2 border-black text-black hover:bg-black hover:text-white duration-300 mr-2 "
                       
                      >
                       Proceed to Checkout
                      </button>
            </Link>
        </div>
      </div>
    </div>
  </div>
</div>
                </div>
                </div>
            </div>
          </>
        )}
      </Container>
    </section>
  );
};

export default Cart;
