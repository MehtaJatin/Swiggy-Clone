import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <div className="header">
    <div className="logoContainer">
      <img
        className="logo"
        src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
      />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const RestCard = (props) => (
  <div className="res-card">
    <img
      className="res-card-image"
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e0vvulfbahjxjz6k4uwi"
    />
    <h3>{props.resName}</h3>
    <h4>{props.cuisine}</h4>
    <h4>{props.rating}</h4>
    <h4>38 minutes</h4>
  </div>
);

const Body = () => (
  <div className="body">
    <div className="search">Search </div>
    <div className="res-container">
      <RestCard
        resName="Meghna Food"
        cuisine="Biryani, North Indian, Asian"
        rating="4.4"
      />
      <RestCard resName="KFC" cuisine="Burger, FastFood" rating="3.2" />
      <RestCard />
      <RestCard />
      <RestCard />
      <RestCard />
      <RestCard />
      <RestCard />
    </div>
  </div>
);

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
