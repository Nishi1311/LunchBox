import {CDN_LINK} from '../Utilis/constant';
const RestaurantCard=({resName})=>{
    return(
        <div className="RestaurantCard">
            <img className="food-image"src={CDN_LINK + resName?.cloudinaryImageId} />
            <h3>{resName?.name}</h3>
            <h4>{resName?. cuisines.join(',')}</h4>
            <h5>{resName?.avgRating} stars</h5>
            <h5>{resName?.costForTwo}  </h5>
            <h5>{resName?.sla?.deliveryTime} minutes</h5> 
            
            


            

        </div>
    )
}
export default RestaurantCard;