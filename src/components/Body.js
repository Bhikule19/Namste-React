import RestuarantCard from "./RestuarantCard";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0177989&lng=72.84781199999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
    setlistOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.data.avgRating > 4
            );
            setlistOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {
          listOfRestaurant.map((restuarant) => (
            <RestuarantCard key={restuarant.info.id} resData={restuarant} />
          )) // Looping over arrray using Map
        }
      </div>
    </div>
  );
};

export default Body;
