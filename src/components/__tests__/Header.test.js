import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header", () => {
  it("Should load Header Component with a login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("Should  cart item with count zero", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    //expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
    // expect(screen.getByText("/🛒/")).toBeInTheDocument();
  });

  it("Should  change login button to logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: "Login" }));
    expect(screen.getByRole("button", { name: "Logout" })).toBeInTheDocument();
  });
});
