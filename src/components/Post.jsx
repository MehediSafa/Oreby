import React, { useContext } from 'react';
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { ApiData } from './ContextApi';
import { Link } from 'react-router-dom';

const Post = ({ allPage, activeGrid, categoryFilter }) => {
    const { info, loading } = useContext(ApiData);

    
    const itemsToDisplay = categoryFilter.length > 0 ? categoryFilter : allPage;

    return (
        <div className={`${
            activeGrid === "active"
                ? 'w-[31%] flex flex-col justify-center'  
                : 'flex flex-wrap'                       
        }`}>
            {itemsToDisplay.map((item) => (
                <div 
                    key={item.id} 
                    className={`${
                        activeGrid === "active"
                            ? "w-full mb-4 flex items-start"        
                            : "lg:w-[31%] w-full mb-4 me-4"        
                    }`}
                >
                    <div className="w-full">
                        <div className="relative group">
                            <Link to={`/shop/${item.id}`}>
                                <img className="w-full" src={item.thumbnail} alt={item.title} />
                            </Link>
                            <div className="absolute lg:top-[214px] top-[100px] lg:bottom-[2px] bottom-0 left-0 bg-white w-full opacity-0 group-hover:opacity-100 group-hover:h-[50%]">
                                <div className="flex gap-x-5 lg:pt-5 justify-end items-center h-12">
                                    <h2 className="text-sm text-gray-500">Add to Wish List</h2>
                                    <FaHeart className="me-4" />
                                </div>
                                <div className="flex gap-x-5 lg:pt-4 lg:pb-4 justify-end items-center">
                                    <h2 className="text-sm text-gray-500">Compare</h2>
                                    <FaCodeCompare className="me-4 text-black" />
                                </div>
                                <div className="flex gap-5 lg:pb-3 justify-end items-center">
                                    <h2 className="text-sm text-gray-600">Add to Cart</h2>
                                    <FaShoppingCart className="me-4" />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between mt-6">
                            <h2 className="font-bold text-lg text-gray-900">{item.title}</h2>
                            <p className="text-lg text-gray-500">${item.price}</p>
                        </div>
                        <p className="text-md text-gray-500">{item.brands}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Post;
