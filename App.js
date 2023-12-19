import React from "react";
import ReactDOM from "react-dom/client";

// App Layout
// Header
// - logo
// - nav items
// Body
// - Search
// - Restuarant container
//   -Restuarant card
// Image, price, est, ratings
// Footer
// -Copyright
// -link
// -add
// -contact

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestuarantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://thumbs.dreamstime.com/b/pizza-rustic-italian-mozzarella-cheese-basil-leaves-35669930.jpg"
      ></img>
      <h4>LaPino's Pizza</h4>
      <h4>Pizza, Indian, North Indian</h4>
      <h4>4.4 star</h4>
      <h4>30 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />
      </div>
    </div>
  );
};

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);
