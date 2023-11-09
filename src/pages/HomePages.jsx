import React, { Fragment,useState,useEffect } from "react";

// PAARTIAL
import Navbar from "../partials/Navbar";
import CardProduct from "../partials/Cards";

// COMPONENTS
import Loader from "../components/Loader";
function HomePage(){
    const [category, setCategory]=useState("")
    const [prices, setPrices]=useState("")
    const [product, setProduct]=useState([])
    const [temp, setTemp]=useState([])
    const [resto, setRest]=useState([])
    const [restoFilter, setRestFilter]=useState([])
    const [allRes, setAllRest]=useState([])
    console.log(resto)
    console.log(allRes)

    useEffect(() => {
        fetch('https://instafood.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999')
            .then(response => response.json())
            .then(item => {
               setRest(item.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
               setRestFilter(item.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
               setAllRest(item.data?.cards)

        })
  }, [])
//     useEffect(() => {
//         fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b')
//             .then(response => response.json())
//             .then(item => {
//                 setProduct(item.drinks)
//                 setTemp(item.drinks)
//         })
       
//   }, [])
  const fetchData = (value) => {
    if(value){
      fetch('https://instafood.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999')
      .then((response) => response.json())
      .then((json) =>{
          const results = restoFilter
          .filter((data) => {
              console.log(data)
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
    setCategory(value);
    fetchData(value);
}

const handleFilter =(value)=>{
    // setCategory(value);
    // fetchData(value);
    // priceData(value)
    setPrices(value)
}
const fetchPost = async (page:number)=>{
    await new Promise((resolve)=>setTimeout(resolve,1000))
    return resto.slice((page-1) * 2, page*2)
}
    return(
        <Fragment>
            <div className="relative">
                <div className="max-w-6xl p-4 py-6 mx-auto">
                    <div className="w-[50%]">
                        <h1 className="text-4xl font-semibold pb-4">Restaurant</h1>
                        <p className="text-gray-500">Lorem Ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                {/*======== nav ===== */}
                <div className="border-t-2 border-b-2">
                    <div className="p-4 max-w-6xl mx-auto flex justify-between">
                        <div className="flex gap-4">
                            <h1>Filter By:</h1>
                            <div className="border-b-2 ">
                                <input type="radio"/>
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
                            <button onClick={()=>setRest(restoFilter)} className="border border-stone-400 p-1 w-32 text-stone-400">
                                CLEAR ALL
                            </button>
                        </div>
                    </div>

                </div>
                {/* <Navbar data={category} /> */}
                <div className="max-w-6xl p-4 mx-auto">
                    <h1>All Restaurants</h1>
                    <div className="grid md:grid-cols-4 grid-cols-3 gap-6 ">
                        {product.length > 0 ? 
                                product
                                .map((item,index) => 
                                    <CardProduct key={index} product={item} />
                            ):<></>}
                    </div>
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
                                        <CardProduct key={index} product={item} />
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
                                        <CardProduct key={index} product={item} />
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
                                        <CardProduct key={index} product={item} />
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