import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CLOUD_IMG_URL } from "../../Config";
import useRestaurant from "./Utils/useRestaurant";
const SingleRestaurant = ()=>{
    const {id} = useParams();
    const restaurant = useRestaurant(id);
    // early return
    if(!restaurant) return null;
    return (
        <div className="single">
            <div className="restaurant_banner">
                <div className="restaurant_detail">
                    <img src={`${CLOUD_IMG_URL}${restaurant?.cloudinaryImageId}`} alt="" />
                    <div className="restaurant_info">
                        <h2>{restaurant?.name}</h2>
                        <p>{restaurant?.cuisines.join(", ")}</p>
                        <p>{restaurant?.locality}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SingleRestaurant;