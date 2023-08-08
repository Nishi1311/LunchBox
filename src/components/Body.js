import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
const Body=()=>{
    let [Restaurant,setRestaurant]=useState([]);
    let [FilteredRestaurant,setFilteredRestaurant]=useState([]);
    let [searchbar,setSearchbar]=useState('');
    useEffect(()=>{
        fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING").then((data)=>{
          return data.json();
        }).then((result)=>{
          for (let i = 0; i < result?.data?.cards.length; i++) {
            let checkData = result?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
           if (checkData !== undefined) {
             console.log(checkData,i)
             setRestaurant(checkData)
             setFilteredRestaurant(checkData)
             }
           }
          
         
          
          
        
        })
        
          },[]
        
        
        )
       
   //conditional rendering- if page is rendered as per the condition
   //one way
   /*if(state.length===0){
    return <Shimmer/>
   }*/
   //second way-using ternary operator
return Restaurant.length===0 ? <Shimmer/>:(
  
        <div className="body">
          <div className="searchdiv">
          <div>
            <input type="text" name='search-input'value={searchbar} onChange={(e)=>{setSearchbar(e.target.value)}}></input>
            <button type="search"onClick={
                    ()=>{
                      Restaurant=Restaurant.filter((ele)=>ele?.info?.name.includes(searchbar))
                        
                        setFilteredRestaurant(Restaurant);
                        }
                    }>Search</button>
          </div>
           <div className="search">
                <button onClick={
                    ()=>{
                      Restaurant=Restaurant.filter((ele)=>ele?.info?.avgRating>4)
                        setFilteredRestaurant(Restaurant);
                        }
                    }
                >Top rated Restaurant</button>
            </div>
            </div>
           
            <div className="rest-container">
            {FilteredRestaurant.map((ele)=>{
                    return(
                        <RestaurantCard key={ele?.info?.id} resName={ele?.info}/>  
                    )
                })}
                   
            </div>
            </div>
    )
}
export default Body;