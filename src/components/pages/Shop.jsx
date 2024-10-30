import React, { useContext, useState } from 'react';
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

  let [activeGrid,setActiveGrid] = useState('')
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

  let handleMulti = ()=> {
    setActiveGrid("active")
  }

  
;

  return (
    <section>
      <Container>
        <div className="flex">
          <div className="w-1/5">
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
                <ul>
                  <li>Categroy</li>
                  <li>Categroy</li>
                  <li>Categroy</li>
                  <li>Categroy</li>
                  <li>Categroy</li>
                </ul>
              )}
            </div>
          </div>
          <div className="w-4/5 pt-8">
            <div className="flex items-center justify-between">
              <div className="">
                <div className="flex items-center gap-x-4">
                  <div
                    onClick={()=> setActiveGrid('')}
                    className="p-3 hover:bg-[gray] text-[#222]"
                  >
                    <IoGrid />
                  </div>
                  <div
                    onClick={handleMulti}
                    className="p-3 hover:bg-[gray] text-[#222]"
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
              <Post allPage={allPage} activeGrid={activeGrid} />
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
