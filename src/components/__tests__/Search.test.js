import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import resList from "../../utils/mockData";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(resList);
    },
  });
});

describe("Search Component", () => {
  it("should filter the restaurant cards based on the search text", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });
    const cardsEarlier = screen.getAllByTestId("testCard");
    expect(cardsEarlier).toHaveLength(15);
    const searchBtn = screen.getByRole("button", { name: "Search" });
    console.log(searchBtn);
    expect(searchBtn).toBeInTheDocument();
    fireEvent.change(screen.getByTestId("searchInput"), {
      target: { value: "Biryani" },
    });
    fireEvent.click(searchBtn);
    const cards = screen.getAllByTestId("testCard");
    expect(cards).toHaveLength(1);
  });
});
