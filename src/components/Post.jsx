import React, { useContext } from 'react';
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { ApiData } from './ContextApi';
import { Link } from 'react-router-dom';

const Post = ({ allPage,activeGrid }) => {
    const { loading } = useContext(ApiData);

    return (
        <>
            {loading ? (
                <h2>Loading...</h2>
            ) : (
                <div className={`${
                    activeGrid == "active"
                    ?'w-[100%] flex flex-col justify-center'
                    : 'flex flex-wrap'
                }`}>
                    {allPage.map((item) => (
                        <div key={item.id} className="lg:w-[31%] w-[100%] mb-[20px] me-[20px]">
                            <div className="w-[100%]">
                                <div className="relative group">
                                    <Link to={`/shop/${item.id}`}>
                                        <img className="w-full" src={item.thumbnail} alt={item.title} />
                                    </Link>
                                    <div className="absolute lg:top-[214px] top-[100px] lg:bottom-[2px] bottom-0 left-0 bg-white w-full opacity-0 group-hover:opacity-100 group-hover:h-[50%]">
                                        <div className="flex gap-x-[20px] lg:pt-[35px] justify-end items-center h-[60px]">
                                            <h2 className="font-sans font-normal lg:text-[16px] text-[10px] text-[#767676]">Add to Wish List</h2>
                                            <FaHeart className="me-[20px]" />
                                        </div>
                                        <div className="flex gap-x-[20px] lg:pt-[21px] lg:pb-[22px] justify-end items-center">
                                            <h2 className="font-sans font-normal lg:text-[16px] text-[10px] text-[#767676]">Compare</h2>
                                            <FaCodeCompare className="me-[20px] text-[#000]" />
                                        </div>
                                        <div className="flex gap-[20px] lg:pb-[11px] justify-end items-center">
                                            <h2 className="font-sans font-normal lg:text-[16px] text-[10px] text-[#262626]">Add to Cart</h2>
                                            <FaShoppingCart className="me-[20px]" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-between mt-[24px]">
                                    <h2 className="font-sans font-bold lg:text-[20px] text-[9px] text-[#262626]">{item.title}</h2>
                                    <p className="font-sans font-normal text-[16px] text-[#767676]">${item.price}</p>
                                </div>
                                <p className="font-sans font-normal text-[16px] text-[#767676]">{item.brands}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default Post;
