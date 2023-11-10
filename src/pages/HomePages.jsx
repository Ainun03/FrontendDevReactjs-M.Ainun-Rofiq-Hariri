import React, { Fragment,useState,useEffect } from "react";

import { IoClose, IoMenu } from "react-icons/io5";

// PAARTIAL
import CardProduct from "../partials/Cards";

// COMPONENTS
import Loader from "../components/Loader";
function HomePage(){
    const [show, setShow] = useState(true);
    const [prices, setPrices]=useState("")
    const [open, setOpen]=useState(false)
    // const [product, setProduct]=useState([])
    // const [temp, setTemp]=useState([])
    const [resto, setRest]=useState([])
    const [restoFilter, setRestFilter]=useState([])
    const [allRes, setAllRest]=useState([])

    useEffect(() => {
        fetch('https://instafood.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999')
            .then(response => response.json())
            .then(item => {
               setRest(item.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
               setRestFilter(item.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
               setAllRest(item.data?.cards)

        })
  }, [])
  const fetchData = (value) => {
    if(value){
      fetch('https://instafood.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999')
      .then((response) => response.json())
      .then((json) =>{
          const results = restoFilter
          .filter((data) => {
              return (
                  value &&
                  data &&
                  data.info.locality.includes(value)
                //   data.strCategory.toLowerCase().includes(value)
                );
          })
          setRest(results);
      })
    }else {
      fetch('https://instafood.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999')
      .then(response => response.json())
      .then(item => {
        setRest(restoFilter)
  })
    }
};
  const findDuplicateItem =  restoFilter?.filter(function(item, index) {
      return index === restoFilter.findIndex(function(obj){
          return (item.info.locality === obj.info.locality)
      })
  })
const handleSearch =(value)=>{
    fetchData(value);
}

const handleFilter =(value)=>{
    setPrices(value)
}
const handleRadio =(value)=>{
    setOpen(value)
}

const handleClick =()=>{
    setRest(restoFilter)
    setOpen(false)
    setPrices("")
}
const handleClickNav =()=>{
    setShow(current => !current);
}

    return(
        <Fragment>
            <div className="relative font-mono">
                 {/*=========== mobile Nav  ========== */}
                 <div role='button' onClick={handleClickNav} className={`overlay fixed z-40 h-full w-full bg-slate-600 opacity-40 inset-x-0 cursor-default transition ease-in-out duration-700 md:translate-x-full ${show ? "hidden" : ""}`}></div>
                    <div className={`fixed bg-white h-full right-0 w-1/2 z-50 md:translate-x-full p-5 ${show ? "translate-x-full transition ease-in-out duration-1000" : "transition ease-in-out duration-1000"}`}>
                        <div className='title flex justify-between mb-3 items-center'>
                        <h1 className='font-bold text-primary text-base' >Rest<span className="text-black underline decoration-primary">aurant</span>.</h1>
                        <button onClick={handleClickNav} className='hover:text-primary text-3xl'>
                            <IoClose />
                        </button>
                        </div>
                        <div className="flex items-baseline">
                            <div className="flex flex-col w-full text-sm font-medium" >
                                <div className="flex flex-col gap-4">
                                    <h1>Filter By:</h1>
                                    <div className="border-b-2 ">
                                        <input
                                        className="radio"
                                        type="radio"
                                        value={true}
                                        onChange={(e) => handleRadio(e.target.value)}
                                        />
                                        <label className="mx-2">Open Now</label>
                                    </div>
                                    <div className="border-b-2 ">
                                    <select 
                                        className=" w-full"
                                        onChange={(e) => handleFilter(e.target.value)}
                                    >
                                            <option value="1" disabled selected>Price</option>
                                            <option value="inc" >High Price</option>
                                            <option value="dec" >Low Price</option>
                                    </select>
                                        
                                    </div>
                                    <div className="border-b-2 ">
                                        <select 
                                            id="category"
                                            name="category"
                                            className="w-full"
                                            // value={category}
                                            onChange={(e) => handleSearch(e.target.value)}
                                        >

                                            <option value="0" disabled selected>Categories</option>
                                            {
                                                findDuplicateItem.length > 0 ?
                                                findDuplicateItem.map((item,index) => 
                                                    <option
                                                        key={index}
                                                        value={item.info.locality}
                                                        >{item.info.locality}
                                                    </option>
                                                )
                                                :""
                                            }
                                    </select>
                                    </div>
                                </div>

                                <div className="pt-12 w-full flex justify-center">
                                    <button onClick={()=>handleClick()} className="border hover:bg-teal-900 hover:text-white border-stone-400 p-1 text-stone-400">
                                        CLEAR ALL
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>       
            {/* ----- */}
                <div className="max-w-6xl p-4 py-6 mx-auto">
                    <div className="w-[50%]">
                        <h1 className="text-4xl font-semibold pb-4">Restaurant</h1>
                        <p className="text-gray-500">Lorem Ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                {/*======== nav ===== */}
                <div className="border-t-2 border-b-2">
                    <div className=" hidden md:block">

                        <div className="p-4 max-w-6xl   mx-auto flex justify-between">
                            <div className="flex gap-4">
                                <h1>Filter By:</h1>
                                <div className="border-b-2 ">
                                    <input 
                                    type="radio"
                                    value={true}
                                    onChange={(e) => handleRadio(e.target.value)}
                                    />
                                    <label className="mx-2">Open Now</label>
                                </div>
                                <div className="border-b-2 ">
                                <select 
                                    className="md:w-32 w-full"
                                    onChange={(e) => handleFilter(e.target.value)}
                                >
                                        <option value="1" disabled selected>Price</option>
                                        <option value="inc" >High Price</option>
                                        <option value="dec" >Low Price</option>
                                </select>
                                    
                                </div>
                                <div className="border-b-2 ">
                                    <select 
                                        id="category"
                                        name="category"
                                        className="w-52"
                                        // value={category}
                                        onChange={(e) => handleSearch(e.target.value)}
                                    >

                                        <option value="0" disabled selected>Categories</option>
                                        {
                                            findDuplicateItem.length > 0 ?
                                            findDuplicateItem.map((item,index) => 
                                                <option
                                                    key={index}
                                                    value={item.info.locality}
                                                    >{item.info.locality}
                                                </option>
                                            )
                                            :""
                                        }
                                </select>
                                </div>
                            </div>

                            <div className="">
                                <button onClick={()=>handleClick()} className="border hover:bg-teal-900 hover:text-white border-stone-400 p-1 w-32 text-stone-400">
                                    CLEAR ALL
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="p-4 max-w-6xl flex md:hidden justify-end  mx-auto">
                        <div onClick={handleClickNav} className="cursor-pointer mt-2 text-black-300 hover:bg-gray-100 hover:text-[#78716c]  flex border rounded-md p-1 text-xl">
                            <IoMenu size={25} />
                        </div>
                    </div>

                </div>

                <div className="max-w-6xl p-4 mx-auto">
                    <div className="py-6 mb-6 text-2xl">
                        <h1>All Restaurants</h1>
                    </div>
                    <div className="grid md:grid-cols-4 grid-cols-3 gap-6 ">
                        {
                            prices ==="inc"?
                            <>
                                {resto.length > 0 ? 
                                    resto
                                    .sort((a, b) => (a.info.feeDetails.totalFee > b.info.feeDetails.totalFee) ? -1 : 1)
                                    .map
                                    ((item,index) => 
                                        <CardProduct key={index} open={open} product={item} />
                                ):
                                <div className="w-full col-span-4 flex justify-center items-center">
                                    <Loader/>
                                </div>
                                }
                            </>
                            :prices === "dec"?
                            <>
                                {resto.length > 0 ? 
                                    resto
                                    .sort((a, b) => (a.info.feeDetails.totalFee > b.info.feeDetails.totalFee) ? 1 : -1)
                                    .map((item,index) => 
                                        <CardProduct key={index} open={open} product={item} />
                                ):
                                <div className="w-full col-span-4 flex justify-center items-center">
                                    <Loader/>
                                </div>
                                }
                            </>
                            : 
                            <>
                                {resto.length > 0 ? 
                                    resto
                                    .map((item,index) => 
                                        <CardProduct key={index} open={open} product={item} />
                                ):
                                <div className="w-full col-span-4 flex justify-center items-center">
                                    <Loader/>
                                </div>
                                }
                            </>
                        }
                        {/* {resto.length > 0 ? 
                                resto
                                .map((item,index) => 
                                    <CardProduct key={index} product={item} />
                            ):
                            <div className="w-full col-span-4 flex justify-center items-center">
                                <Loader/>
                            </div>
                            } */}
                    </div>
                    <div className="flex pt-12 justify-center">
                        <div className="border cursor-pointer font-semibold p-2 flex justify-center border-primary text-primary w-64">
                            <button>LOAD MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default HomePage