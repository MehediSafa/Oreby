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
  let [perPage, setPerPage] = useState(6);
  
  let lastPage = currentPage * perPage;
  let firstPage = lastPage - perPage;
  let allPage = info.slice(firstPage, lastPage);
  let pageNumber = [];
  
  let [activeGrid, setActiveGrid] = useState('');
  let [category, setCategory] = useState([])
  let [categoryFilter,setCategoryFilter] = useState([]);

  let [showBrands, setShowBrands] = useState(false)
  let [brand, setBrand] = useState([])
  let [brandFilter, setBrandFilter] = useState([])

  for (let i = 0; i < Math.ceil(categoryFilter.length > 0 ?categoryFilter : info.length / perPage); i++) {
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
  }
  
  let handleCategory = (cItem) => {
      let filterItem = info.filter((item)=>item.category == cItem)
      setCategoryFilter(filterItem) 
      setBrandFilter([])
  }
let handleBrands = (cBrands) => {
    let filterItem = info.filter((item)=>item.brand == cBrands)
    setBrandFilter(filterItem)
    setCategoryFilter([])
  
    
}
 
  


  useEffect(()=>{
    setCategory([...new Set(info.map((item)=>item.category )) ])

    setBrand([...new Set(info.map((item)=>item.brand))])
  },[info])

 
  

  return (
    <section>
      <Container>
        <div className="flex">
          <div className="w-1/5">

          {/* categorty part  */}
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
                <ul className='pt-4'>
                  { category.map((item)=>(
                     <li onClick={()=>handleCategory(item)} className='capitalize  font-bold font-sans text-[#262626] text-[16px]'>{item}</li>
                  ))     
                  }
                </ul>
              )}
            </div>

              {/* brand part */}
            <div className="pr-6 pt-8">   
              <div className='flex justify-between items-center
              ' onClick={() => setShowBrands(!showBrands)}>
              
                <h2 className="text-[#262626] font-bold text-[20px] font-sans">
                  Shop by Brands
              </h2>
              {showBrands ? <FaMinus /> : <FaPlus />}
              </div>
              {
                showBrands && (
                  <ul className='pt-4'>
                     { brand.map((item)=>(
                     <li onClick={()=>handleBrands(item)} className='capitalize  font-bold font-sans text-[#262626] text-[16px]'>{item}</li>
                    ))
                  }
                  </ul>
                )
              }

            </div>
          </div>
          <div className="w-4/5 pt-8">
            <div className="flex items-center justify-between">
              <div className="">
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
              <div className="flex justify-end items-center gap-x-10">
                <div className="">
                  <label className="pr-3" htmlFor="">
                    Sort By :
                  </label>
                  <select
                    className="w-[60px] h-[30px] border-[1px] border-[#262626]"
                    name=""
                    id=""
                  >
                    <option value="">one</option>
                    <option value="">one</option>
                    <option value="">one</option>
                    <option value="">one</option>
                  </select>
                </div>
                <div className="">
                  <label className="pr-3" htmlFor="">
                    Show:
                  </label>
                  <select
                    className="w-[60px] h-[30px] border-[1px] border-[#262626]"
                    name=""
                    id=""
                  >
                    <option value="">one</option>
                    <option value="">one</option>
                    <option value="">one</option>
                    <option value="">one</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-between flex-wrap">
              <Post allPage={allPage} 
                  activeGrid={activeGrid} 
                  categoryFilter ={categoryFilter} 
                  brandFilter={brandFilter}/>
              <div className="py-10 flex justify-center w-full">
                <Pagination
                  pageNumber={pageNumber}
                  paginate={paginate}
                  next={next}
                  prev={prev}
                  currentPage={currentPage}                  
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Shop;
