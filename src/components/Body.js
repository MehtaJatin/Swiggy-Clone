import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Search from "./Search";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const originalList = resList;
  const searchObject = {
    resList: listOfRestaurants,
    setResList: setListOfRestraunt,
    originalResList: originalList,
  };

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );
      const json = await data.json();
      console.log(json.data);
      setListOfRestraunt(resList);
      // setListOfRestraunt(json.data.cards[3].card.card.info);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Please check your internet connection</h1>;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <Search searchObject={searchObject} />
        </div>
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
          <Link
            className="link-style"
            key={restaurant.data.id}
            to={"/restaurants/" + restaurant.data.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
