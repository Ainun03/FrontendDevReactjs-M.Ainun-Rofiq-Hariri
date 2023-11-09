import React, { Fragment } from "react";

function Navbar({data}){
    console.log(data)
    return(
        <Fragment>
            <div className="border-t-2 border-b-2">
                <div className="p-4 max-w-6xl mx-auto flex justify-between">
                    <div className="flex gap-4">
                        <h1>Filter By:</h1>
                        <div className="border-b-2 ">
                            <input type="radio"/>
                            <label className="mx-2">Open Now</label>
                        </div>
                        <div className="border-b-2 ">
                           <select className="w-24 ">
                                <option value="0" disabled >Price</option>
                                <option value="0" >Price</option>
                                <option value="0" className="text-blue-300 text-semibold">Hek</option>
                           </select>
                            
                        </div>
                        <div className="border-b-2 ">
                            <select className="w-52">
                                {
                                    data.length >0?
                                    data.map((item,index) => 
                                        <option
                                            key={index}
                                            value={item.idDrink}
                                            >{item.strCategory}
                                        </option>
                                    )
                                    :""
                                }
                           </select>
                        </div>
                    </div>
                    <div className="">
                        <button className="border border-stone-400 p-1 w-32 text-stone-400">
                            CLEAR ALL
                        </button>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}
export default Navbar