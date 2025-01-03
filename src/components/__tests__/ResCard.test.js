import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import resList from "../../utils/mockData";
import "@testing-library/jest-dom";

describe("RestaurantCard Component", () => {
  it("should render the restaurant card with correct data", () => {
    const mockRestaurant = resList[0];
    render(<RestaurantCard resData={mockRestaurant} />);
    expect(screen.getByText("KFC")).toBeInTheDocument();
  });

  it("should render the promoted restaurant card with correct data", () => {
    const mockRestaurant = resList[0];
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    render(<RestaurantCardPromoted resData={mockRestaurant} />);
    expect(screen.getByText("Promoted")).toBeInTheDocument();
  });
});
