import { useEffect, useState } from "react";

// Hooks are just normal javascript function
const useRestaurant = (id)=>{
    const [restaurant,setRestaurant] = useState(null);
    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=28.6853005&lng=77.257933&menuId="+id);
            const data = await res.json();
            setRestaurant(data.data);
        }
        fetchData();
    },[id])
    // return restauarant data
    return restaurant;
}
export default useRestaurant;