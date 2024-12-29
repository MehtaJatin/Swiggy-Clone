import { useEffect, useState } from "react";
import { RES_MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setRestInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log(resId);
    const data = await fetch(RES_MENU_URL + resId);
    const json = await data.json();
    setRestInfo(json?.data?.cards[2].card.card.info);
    console.log(json?.data?.cards[2].card.card.info);
  };

  return resInfo;
};

export default useRestaurantMenu;
