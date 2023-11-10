import React from 'react'
import ReactStars from "react-rating-stars-component";

const StarRating = ({bintang}) =>{
    return (
        <div className="flex">
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