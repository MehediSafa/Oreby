import React, { useContext, useEffect, useState } from 'react';
import Container from '../Container';
import { FaPlus, FaMinus } from "react-icons/fa";
import { ApiData } from '../ContextApi';
import Post from '../Post';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa6";

const Shop = () => {
  let { info, loading } = useContext(ApiData);
  let [show, setShow] = useState(false);
  let [currentPage, setCurrentPage] = useState(1);
  let [perPage, setPerPage] = useState(7);
  
  let lastPage = currentPage * perPage;
  let firstPage = lastPage - perPage;
  let allPage = info.slice(firstPage, lastPage);
  let pageNumber = [];
  
  let [activeGrid, setActiveGrid] = useState('');
  let [category, setCategory] = useState([]);
  let [categoryFilter, setCategoryFilter] = useState([]);
  
  let [showBrands, setShowBrands] = useState(false);
  let [brand, setBrand] = useState([]);
  let [brandFilter, setBrandFilter] = useState([]);

  let [showPrice, setShowPrice] = useState(false)
  let [low,setLow] = useState("")
  let [high,setHigh] = useState("")
  let [priceShow, setPriceSHow] = useState([])
  
  const itemsToPaginate = categoryFilter.length > 0 ? categoryFilter : brandFilter.length > 0 ? brandFilter : info;
  for (let i = 0; i < Math.ceil(info.length / perPage); i++) {
    pageNumber.push(i);
  }

  let paginate = (paginate) => {
    setCurrentPage(paginate + 1);
  };

  let next = () => {
    if (currentPage < pageNumber.length) {
      setCurrentPage((state) => state + 1);
    }
  };

  let prev = () => {
    if (currentPage > 1) {
      setCurrentPage((state) => state - 1);
    }
  };

  let handleMulti = () => {
    setActiveGrid(activeGrid === 'active' ? '' : 'active');
  };

  let handleCategory = (cItem) => {
    let filterItem = info.filter((item) => item.category === cItem);
    setCategoryFilter(filterItem);
    setBrandFilter([]); 
    setCurrentPage(1); 
  };

  let handleBrands = (cBrands) => {
    let filterItem = info.filter((item) => item.brand === cBrands);
    setBrandFilter(filterItem);
    setCategoryFilter([]); 
    setCurrentPage(1); 
  };
  
  let handlePrice = (value) => {
    setLow(value.low);
    setHigh(value.high);
    
   
    let priceRange = info.filter((item) => 
      item.price > value.low && item.price <value.high
      
      );
      
     setPriceSHow(priceRange)
     setCurrentPage(1);
      
  };
  
  let handleChange = (e) => {
    setPerPage(e.target.value);
    
  } 
  let handleAll = () => {
    setCategoryFilter([]);  
    setBrandFilter([]);     
    setCurrentPage(1);  
        
  };

  useEffect(() => {
    setCategory([...new Set(info.map((item) => item.category))]);
    setBrand([...new Set(info.map((item) => item.brand))]);
  }, [info]);

  return (
    <section>
      <Container>
        <div className="flex">
          <div className="w-1/5">
            {/* Category section */}
            <div className="pr-6 pt-8">
              <div
                className="flex justify-between items-center"
                onClick={() => setShow(!show)}
              >
                <h2 className="text-[#262626] font-bold text-[20px] font-sans">
                  Shop by Category
                </h2>
                {show ? <FaMinus /> : <FaPlus />}
              </div>
              {show && (
                <ul className="pt-4">
                  <li
                      onClick={handleAll}
                      
                      className="capitalize font-bold font-sans text-[#262626] text-[16px]"
                    >
                      All Product
                    </li>
                  {category.map((item) => (
                    <li
                      key={item}
                      onClick={() => handleCategory(item)}
                      className="capitalize font-bold font-sans text-[#262626] text-[16px]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Brand section */}
            <div className="pr-6 pt-8">
              <div
                className="flex justify-between items-center"
                onClick={() => setShowBrands(!showBrands)}
              >
                <h2 className="text-[#262626] font-bold text-[20px] font-sans">
                  Shop by Brands
                </h2>
                {showBrands ? <FaMinus /> : <FaPlus />}
              </div>
              {showBrands && (
                <ul className="pt-4">
                  {brand.map((item) => (
                    <li
                      key={item}
                      onClick={() => handleBrands(item)}
                      className="capitalize font-bold font-sans text-[#262626] text-[16px]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {/* price section */}
            <div className="pr-6 pt-8">
              <div className="flex justify-between items-center" 
              onClick={()=> setShowPrice(!showPrice)}>
              <h2 className="text-[#262626] font-bold text-[20px] font-sans">Shop By Price</h2>
              {showPrice ? <FaMinus /> : <FaPlus />}
              </div>
              {showPrice && 

                <ul>
                  <li onClick={()=>handlePrice({low:0 , high:10})} 
                  className="capitalize font-bold font-sans text-[#262626] text-[16px]">$00 - $10</li>
                  <li onClick={()=>handlePrice({low:10 , high:20})} 
                  className="capitalize font-bold font-sans text-[#262626] text-[16px]">$10 - $20</li>
                  <li onClick={()=>handlePrice({low:20 , high:30})}  
                  className="capitalize font-bold font-sans text-[#262626] text-[16px]">$20 - $30</li>
                  <li onClick={()=>handlePrice({low:30 , high:100})}  
                  className="capitalize font-bold font-sans text-[#262626] text-[16px]">$30 - $100</li>
                </ul>
              }
            </div>
          </div>

          <div className="w-4/5 pt-8">
            <div className="flex items-center justify-between">
             
              <div>
                <div className="flex items-center gap-x-4">
                  <div
                    onClick={() => setActiveGrid('')}
                    className={`p-3 ${activeGrid === '' ? 'bg-[gray] text-[#222]' : 'bg-white text-[#222]'}`}
                  >
                    <IoGrid />
                  </div>
                  <div
                    onClick={handleMulti}
                    className={`p-3 ${activeGrid === 'active' ? 'bg-[gray] text-[#222]' : 'bg-white text-[#222]'}`}
                  >
                    <FaList />
                  </div>
                </div>
              </div>
              <div className='flex'>
                {/* sort by part  */}
               <div>
               <label htmlFor="sort">Sort By:</label>
                <select name="sort" id="sort" >
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                </select>
               </div>
{/* show item part  */}
               <div>
                <label htmlFor="show">Show</label>
                <select name="show" id="show" onChange={handleChange}>
                  <option value="6">6</option>
                  <option value="12">12</option>
                  <option value="18">18</option>
                </select>
               </div>
              </div>
              
            </div>

            <div className="flex justify-between flex-wrap">
              <Post
                allPage={allPage}
                activeGrid={activeGrid}
                categoryFilter={categoryFilter}
                brandFilter={brandFilter}
                priceShow={priceShow}
              />
              <div className="py-10 flex justify-center w-full">
                {pageNumber.length > 1 && categoryFilter.length === 0 && brandFilter.length === 0 && (
                  <Pagination
                    pageNumber={pageNumber}
                    paginate={paginate}
                    next={next}
                    prev={prev}
                    currentPage={currentPage}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Shop;
