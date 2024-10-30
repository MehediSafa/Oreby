import React, { useContext, useState } from 'react';
import Container from '../Container';
import { FaPlus, FaMinus } from "react-icons/fa";
import { ApiData } from '../ContextApi';
import Post from '../Post';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';


const Shop = () => {
  const [show, setShow] = useState(false);
  let {info,loading} = useContext(ApiData)
 
  let [currentPage, setCurrentPage] = useState(1)
  let [perPage, setPerPage] = useState(7)

  let lastPage = currentPage * perPage
  let firstPage = lastPage - perPage

  let allPage = info.slice(firstPage, lastPage)


  let pageNumber = []


  let paginate = (paginate) => {
    setCurrentPage(paginate )
  }

  for(let i = 1; i < Math.ceil(info.length / perPage) ; i++){
    pageNumber.push(i)
  }

  let next = () => {
    if (currentPage < pageNumber.length) {
        setCurrentPage( (state)=> state + 1 )
    }
  }

  let prev = () => {
    if(currentPage > 0){
      setCurrentPage( (state) => state - 1)
    }
  }
  
  return (
    <section id='shop'>
      <Container>
        <div>
          <h2 className='font-sans font-bold text-[49px] text-[#262626] pt-[138px]'>Products</h2>
          <p className='font-sans font-normal text-[12px] text-[#767676] '> <Link to='/'> Home </Link>  &gt; <Link to='/shop'> Products</Link></p>

          <div className='flex'>
            <div className='w-1/5 mt-[130px]'>
              <div className=''>
                <div onClick={() => setShow(!show)} className='flex justify-between items-center cursor-pointer'>
                  <h2 className='font-sans font-bold text-[20px] text-[#262626]'>Shop by Category</h2>
                  {show ? <FaMinus /> : <FaPlus />}
                </div>
                {show && (
                  <ul className='mt-4'>
                    <li className='mt-[20px] font-sans font-normal text-[16px] text-[rgb(118,118,118)]'>Category 1</li>
                    <li className='mt-[20px] font-sans font-normal text-[16px] text-[#767676]'>Category 2</li>
                    <li className='mt-[20px] font-sans font-normal text-[16px] text-[#767676]'>Category 3</li>
                    <li className='mt-[20px] font-sans font-normal text-[16px] text-[#767676]'>Category 4</li>
                    <li className='mt-[20px] font-sans font-normal text-[16px] text-[#767676]'>Category 5</li>
                  </ul>
                )}
              </div>
            </div>

            <div className='lg:w-4/5  '>
           <div className=' flex lg:flex-row flex-col lg:gap-y-0 gap-y-2  justify-end  items-center pt-[130px] pb-[10px]'>
           <div className='flex items-center'>
            <div>

                <label className='pe-[20px] font-sans font-normal text-[16px] text-[#767676]' htmlFor="">Sort by :</label>
                <div>
                  
                </div>
            </div>
                <select className='border-[1px] border-[#737373] text-center w-[100px] h-[30px] font-sans font-normal text-[16px] text-[#767676]'>
                  <option value="" className='font-sans font-normal text-[16px] text-[#767676]'>one</option>
                  <option value="" className='font-sans font-normal text-[16px] text-[#767676]'>two</option>
                  <option value="" className='font-sans font-normal text-[16px] text-[#767676]'>three</option>
                  <option value="" className='font-sans font-normal text-[16px] text-[#767676]'>four</option>
                  <option value="" className='font-sans font-normal text-[16px] text-[#767676]'>five</option>
                </select>
              </div>
              <div className='ml-5 flex items-center'>
                <div>

                <label className='pe-[20px] font-sans font-normal text-[16px] text-[#767676]' htmlFor="">Show</label>
                </div>
                <select className='border-[1px] border-[#737373] text-center w-[100px] h-[30px] font-sans font-normal text-[16px] text-[#767676]'>
                  <option value="" className='font-sans font-normal text-[16px] text-[#767676]'>one</option>
                  <option value="" className='font-sans font-normal text-[16px] text-[#767676]'>two</option>
                  <option value="" className='font-sans font-normal text-[16px] text-[#767676]'>three</option>
                  <option value="" className='font-sans font-normal text-[16px] text-[#767676]'>four</option>
                  <option value="" className='font-sans font-normal text-[16px] text-[#767676]'>five</option>
                </select>
              </div>
           </div>
           <div className='flex flex-wrap ps-8'>
                
                <Post allPage={allPage}/>

                <div className='py-[128px] flex justify-center w-full'>

                <Pagination pageNumber={pageNumber} pagintate={paginate} next={next} prev={prev} />
                </div>
           </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Shop;
