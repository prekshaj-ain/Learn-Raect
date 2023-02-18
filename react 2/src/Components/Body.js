import RestaurantCard from "./RestaurantCard";
import React, { useEffect } from "react";
import { useState } from "react";
import Skeleton from "./Skeleton";
const filterData = function (searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
};
const Body = function () {
  useEffect(() => {
    const fetchRestaurant = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6853005&lng=77.257933&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    };
    fetchRestaurant();
  }, []);

  // to create local variable
  const [searchTxt, setSearchTxt] = useState(""); // to create state variable
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const changeHandler = (e) => {
    setSearchTxt(e.target.value);
  };

  return (
    <>
      <div className="search">
        <input
          placeholder="search Restaurant"
          type="text"
          value={searchTxt}
          onChange={changeHandler}
        />
        <button
          onClick={() =>
            setFilterRestaurants(filterData(searchTxt, allRestaurants))
          }
        >
          Search
        </button>
      </div>
      { (filterRestaurants.length === 0 && allRestaurants !== 0) && <div className="empty_msg">No restaurant found!</div>}
      {allRestaurants.length === 0 ? (
        <Skeleton />
      ) : (
        <div className="restaurant-list">
          {filterRestaurants.map((restaurant) => {
            return (
              <RestaurantCard key={restaurant?.data?.id} {...restaurant.data} />
            );
          })}
        </div>
      )}
    </>
  );
};
export default Body;
