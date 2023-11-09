import React,{useState} from 'react'
import {FaStar} from 'react-icons/fa'
import {BsStar} from 'react-icons/bs'

import ReactStars from "react-rating-stars-component";

const StarRating = ({bintang}) =>{
    const [rating,setRating]=useState(null)
    return (
        <div className="flex">
            {/* {[...Array(5)].map((star,i)=>{
                const ratingValue=i+1
                return( 
                    <label>
                        <input 
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={()=>setRating(ratingValue)}
                        />
                        <FaStar color={ratingValue <= rating?"#ffc107":"e4e5e9"} size={25} />
                    </label>
                    
                )
            })} */}
            <ReactStars
                count={5}
                value={bintang}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#001933"
            />
        </div>
    )
}
export default StarRating;