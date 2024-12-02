import React, { useContext, useEffect, useRef, useState } from "react";
import Container from "./Container";
import { HiMiniBars2 } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
import { FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../slice/productSlice";
import { Link, useNavigate } from "react-router-dom";
import { ApiData } from "./ContextApi";

const Navbar = () => {
  let { info, loading } = useContext(ApiData);

  
  const [isOpen, setIsOpen] = useState(false);  
  const [isCartOpen, setIsCartOpen] = useState(false); 
  const [isLogin, setIsLogin] = useState(false); // 

  const dropdownRef = useRef(null);
  const cartRef = useRef(null); 
  const loginRef = useRef(null); 

  const data = useSelector((state) => state.product.cartItem); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [search, setSearch] = useState('')
  let [searchFilter, setSearchFilter] = useState([])
  let handleChange = (e) => {
    setSearch(e.target.value);
  
    if(e.target.value == ''){
      setSearchFilter([])
    } else{

      const searchOneByOne = info.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchFilter(searchOneByOne); 
    }
  
  };
  
  let handleSearchId = (id) => {
    navigate(`/shop/${id}`);
    setSearch(""); // Clear search input
    setSearchFilter([]); // Clear search results
  };
  
  
  
  const handleCartPage = () => {
    navigate("/cart");
   
  };

  let handleCheckout = ()=> {
    navigate('/checkout')
    setIsCartOpen(false)
    setSearch('')
  }

 
  const handleClickOutside = (event) => {
    
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setIsCartOpen(false);
    }
    if (loginRef.current && !loginRef.current.contains(event.target)) {
      setIsLogin(false);
    }
  };

  useEffect(() => {
    
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
     
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section id="navbar" className="bg-[#F5F5F3] py-[45px] border-t border-b border-[#979797]">
      <Container>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-y-3">
          {/* Shop by Category */}
          <div
            ref={dropdownRef}
            className="cursor-pointer lg:w-[20%] w-full flex items-center gap-2 relative"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <HiMiniBars2 className="ps-[2px]" />
            <p className="font-sans font-normal text-[14px] text-[#262626]">
              Shop by Category
            </p>

            {isOpen && (
              <div className="bg-[#262626] absolute left-0 top-[45px] z-10 w-[200px]">
                <ul>
                  {["Accessories", "Electronics", "Clothes", "Bags", "Home Appliances"].map(
                    (item, index) => (
                      <li
                        key={index}
                        className="w-full h-[50px] flex items-center px-4 font-sans font-normal text-[14px] text-white border-b border-[#2D2D2D] hover:text-white hover:font-bold"
                      >
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Search Bar */}
          <div className="lg:w-[50%] w-full">

          <div className="relative">
  <input
    type="text"
    value={search}
    placeholder="Search Products"
    className="border-none lg:indent-[21px] indent-3 w-full h-[50px]"
    onChange={handleChange}
  />
  <IoMdSearch className="absolute top-[50%] translate-y-[-50%] right-[30px] text-[1.26rem]" />
  
  {search && (
    <div className="absolute top-[51px] left-0 w-[500px] bg-white shadow-lg rounded-md z-20 overflow-y-scroll h-[400px]">
      {searchFilter.length > 0 ? (
        searchFilter.map((item) => (
          <div
            key={item.id} 
            onClick={() => handleSearchId(item.id)}
            className="flex items-center gap-3 p-4 border-b border-gray-200 cursor-pointer"
          >
            <div className="w-[80px] h-[50px] bg-gray-200 border border-gray-300 rounded-md">
              <img
                src={item.thumbnail}
                alt=""
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-[14px] text-black">{item.title}</h3>
            </div>
          </div>
        ))
      ) : (
        <div className="p-4 text-center text-gray-500">No results found.</div>
      )}
    </div>
  )}
</div>

          </div>

          {/* Login and Cart Section */}
          <div className="lg:w-[25%] w-full flex lg:justify-end justify-around items-center gap-3">
            {/* Login Dropdown */}
            <div ref={loginRef} className="relative">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => setIsLogin((prev) => !prev)}
              >
                <FaUser />
                <FaCaretDown />
              </div>
              {isLogin && (
                <div className="absolute top-[23px] left-0 flex flex-col z-50 bg-white border border-gray-300 rounded-md">
                  <a
                    href="#"
                    className="font-sans font-bold text-[14px] px-[40px] py-[10px] text-[#262626] hover:text-white hover:bg-[#262626]"
                  >
                    Login
                  </a>
                  <a
                    href="#"
                    className="font-sans font-bold text-[14px] px-[40px] py-[10px] text-[#262626] hover:text-white hover:bg-[#262626]"
                  >
                    Sign Up
                  </a>
                </div>
              )}
            </div>

            {/* Cart Dropdown */}
            <div ref={cartRef} className="relative">
              {data.length > 0 && (
                <div className="absolute top-[-10px] right-[-10px] h-[20px] w-[20px] bg-red-500 rounded-full text-white text-center leading-[20px] text-[12px] z-10">
                  {data.length}
                </div>
              )}

              <FaShoppingCart
                className="cursor-pointer text-[1.5rem]"
                onClick={() => setIsCartOpen((prev) => !prev)}
              />

              {isCartOpen && (
                <div className="absolute top-[30px] right-0 w-[300px] bg-white shadow-lg rounded-md z-20">
                  {data.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 border-b border-gray-200"
                    >
                      <div className="w-[80px] h-[80px] bg-gray-200 border border-gray-300 rounded-md">
                        <img
                          src={item.thumbnail}
                          alt=""
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-[14px] text-black">
                          {item.title}
                        </h3>
                        <h3 className="font-bold text-[14px] text-black">
                          ${item.price.toFixed(2)}
                        </h3>
                      </div>
                      <div
                        className="text-[20px] cursor-pointer text-gray-500 hover:text-black"
                        onClick={() => dispatch(removeFromCart(i))}
                      >
                        <RxCross2 />
                      </div>
                    </div>
                  ))}

                  <div className="bg-white py-4 px-5">
                    <h5 className="text-[rgba(166,162,162,0.9)]">
                      Subtotal:{" "}
                      <span className="text-black font-bold">
                        $
                        {data.reduce(
                          (total, item) => total + item.price,
                          0
                        ).toFixed(2)}
                      </span>
                    </h5>
                    <div className="flex mt-4">
                      <button
                        className="flex-1 px-[20px] py-[12px] text-[12px] border-2 border-black text-black hover:bg-black hover:text-white duration-300 mr-2"
                        onClick={handleCartPage}
                      >
                        View Cart
                      </button>
                     
                     <button className="flex-1 px-[20px] py-[12px] text-[12px] border-2 border-black text-black hover:bg-black hover:text-white duration-300"
                     onClick={handleCheckout}
                     >
                        Checkout
                      </button>
                    
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Navbar;
