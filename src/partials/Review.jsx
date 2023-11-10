import React from "react";

import {BiSolidUserCircle} from 'react-icons/bi'
import {AiFillStar} from 'react-icons/ai'

const Review =()=>{
    return(
        <section className="4 max-w-6xl mx-auto py-4">
            <div className="grid grid-cols-a md:grid-cols-3 gap-3">
                <div className="border border-gray-300 hover:border-red-300 rounded-md p-6 ">
                    <div className="flex justify-between w-full">
                        <div className="flex items-center w-full h-full gap-1">
                            <BiSolidUserCircle size={50} color="gray"/>
                            <div className="flex flex-col">
                                <h1 className="font-semibold">Lee</h1>
                                <p className="text-gray-700 text-xs">Paiton</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <h1>4.5</h1>
                            <AiFillStar size={20} color="yellow"/>
                        </div>
                    </div>
                    <div className="pt-4 break-all whitespace-normal  text-gray-700 font-serif">
                        <h1>" Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!"</h1>
                    </div>
                </div>
                <div className="border border-gray-300 hover:border-red-300 rounded-md p-6 ">
                    <div className="flex justify-between w-full">
                        <div className="flex items-center w-full h-full gap-1">
                            <BiSolidUserCircle size={50} color="gray"/>
                            <div className="flex flex-col">
                                <h1 className="font-semibold">Jimin</h1>
                                <p className="text-gray-700 text-xs">Kelor</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <h1>4.5</h1>
                            <AiFillStar size={20} color="yellow"/>
                        </div>
                    </div>
                    <div className="pt-4 break-all whitespace-normal  text-gray-700 font-serif">
                        <h1>" Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!"</h1>
                    </div>
                </div>
                <div className="border border-gray-300 hover:border-red-300 rounded-md p-6 ">
                    <div className="flex justify-between w-full">
                        <div className="flex items-center w-full h-full gap-1">
                            <BiSolidUserCircle size={50} color="gray"/>
                            <div className="flex flex-col">
                                <h1 className="font-semibold">Sunghee</h1>
                                <p className="text-gray-700 text-xs">Tanjung</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <h1>4.5</h1>
                            <AiFillStar size={20} color="yellow"/>
                        </div>
                    </div>
                    <div className="pt-4 break-all whitespace-normal  text-gray-700 font-serif">
                        <h1>" Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!"</h1>
                    </div>
                </div>
            </div>
    </section>
    )
}
export default Review