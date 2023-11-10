import React, { Fragment } from "react";
// router
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
// component
import ims from '../assets/images/img_car.png'
import StarRating from "../components/StarRating";

import { productDetailID } from "../slices/productsSlice";

function CardProduct({product,open}){
    const navigate =useNavigate()
    const dispatch = useDispatch();

    return(
        <Fragment>
            {
                open  ?
                    <div  className="max-h-max py-2">
                            <div className="h-[23rem] flex flex-col gap-1">
                                <div className="flex flex-col ">
                                    <img className="" src={'https://static.vecteezy.com/system/resources/previews/003/475/012/original/confused-man-with-question-mark-concept-flat-illustration-free-vector.jpg'} alt='mobil'/>
                                    <h1 className="pt-4 font-semibold break-all">{product?product.info.name:""}</h1>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <div >
                                        <StarRating bintang={product?product.info.avgRating:""}/>
                                    </div>
                                    {/* <h1>{product?product.info.avgRating:""}</h1> */}
                                </div>
                                <div className="flex justify-between uppercase text-[10px] text-gray-500 font-normal">
                                    <div className="w-[50%]">
                                        <p>{product?product.info.locality:""} - ${product?product.info.feeDetails.totalFee:"000"}</p>
                                    </div>
                                    <div className="flex gap-1" >
                                        {
                                            product.info.isOpen === true? 
                                                <>
                                                    <div className="flex items-center rounded-full">
                                                        <div className="p-1 bg-green-700 rounded-full ">
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center">
                                                        FIKS OPEN
                                                    </div>

                                                </>
                                                :""
                                        

                                        }
                                    
                                    </div>
                                </div>

                                <div className="h-full items-end flex ">
                                    <div
                                        onClick={()=>
                                            dispatch(productDetailID(product.info)) &&
                                            navigate(`/product/${product.info.id}`)
                                        }
                                        className="bg-primary text-white flex items-center justify-center w-full">
                                        <button className="p-2  ">
                                            Learn More 
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    :
                        <div  className="max-h-max py-2">
                            <div className="h-[23rem] flex flex-col gap-1">
                                <div className="flex flex-col ">
                                    <img className="" src={'https://static.vecteezy.com/system/resources/previews/003/475/012/original/confused-man-with-question-mark-concept-flat-illustration-free-vector.jpg'} alt='mobil'/>
                                    <h1 className="pt-4 font-semibold break-all">{product?product.info.name:""}</h1>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <div >
                                        <StarRating bintang={product?product.info.avgRating:""}/>
                                    </div>
                                    {/* <h1>{product?product.info.avgRating:""}</h1> */}
                                </div>
                                <div className="flex justify-between uppercase text-[10px] text-gray-500 font-normal">
                                    <div className="w-[50%]">
                                        <p>{product?product.info.locality:""} - ${product?product.info.feeDetails.totalFee:"000"}</p>
                                    </div>
                                    <div className="flex gap-1" >
                                        {
                                            product.info.isOpen === true ?
                                            <>
                                                <div className="flex items-center rounded-full">
                                                    <div className="p-1 bg-green-700 rounded-full ">
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    Open Now
                                                </div>
                                            </>
                                            :
                                            <>
                                                <div className="flex items-center rounded-full">
                                                    <div className="p-1 bg-red-700 rounded-full ">
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    CLose
                                                </div>
                                            </>

                                        }
                                    
                                    </div>
                                </div>

                                <div className="h-full  items-end flex ">
                                    <div
                                        onClick={()=>
                                            dispatch(productDetailID(product.info)) &&
                                            navigate(`/product/${product.info.id}`)
                                    }
                                        className="bg-primary hover:bg-teal-900 text-white cursor-pointer flex items-center justify-center w-full">
                                        <button className="p-2  ">
                                            Learn More 
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                
            }

        </Fragment>
    )
}
export default CardProduct