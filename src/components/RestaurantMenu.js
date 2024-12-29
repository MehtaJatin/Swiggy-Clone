import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restInfo = useRestaurantMenu(resId);
  const name = restInfo?.name;

  return restInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Cold Drink</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
