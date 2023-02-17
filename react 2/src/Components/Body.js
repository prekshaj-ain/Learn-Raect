import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../../Config";
import React from "react";
import { useState } from "react";
const filterRestaurants = function(searchText, restaurants){
    return restaurants.filter((restaurant)=> restaurant.data.name.includes(searchText));
}
const Body = function () {
    // to create local variable
    const [searchTxt,setSearchTxt] = useState(""); // to create state variable
    const [restaurants,setRestaurants] = useState(restaurantList);
    const changeHandler = (e)=>{
    setSearchTxt(e.target.value)
  }
  return (
    <>
      <div className="search">
        <input placeholder="search Restaurant" type="text" value={searchTxt} onChange={changeHandler}/>
        <button onClick={()=>setRestaurants(filterRestaurants(searchTxt,restaurants))}>Search</button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant?.data?.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
