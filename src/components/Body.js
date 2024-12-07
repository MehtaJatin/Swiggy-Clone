import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";
import Search from "./Search";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState(resList);
  const originalList = resList;
  const searchObject = {
    resList: listOfRestaurants,
    setResList: setListOfRestraunt,
    originalResList: originalList,
  };
  return (
    <div className="body">
      <Search searchObject={searchObject} />
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            filteredList.sort((a, b) => b.data.avgRating - a.data.avgRating);
            setListOfRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
