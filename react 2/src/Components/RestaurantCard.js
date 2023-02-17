import { CLOUD_IMG_URL } from "../../Config";

const RestaurantCard = ({name,cloudinaryImageId,avgRating,cuisines})=>(
    <div className="card">
        <img src={CLOUD_IMG_URL+cloudinaryImageId} alt="image" />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating}</h4>
    </div>
)
export default RestaurantCard;