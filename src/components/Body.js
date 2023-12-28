import { restaurantList } from "../utils/mockData";
import RestuarantCard from "./RestuarantCard";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState(restaurantList);

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
            <RestuarantCard key={restuarant.data.id} resData={restuarant} />
          )) // Looping over arrray using Map
        }
      </div>
    </div>
  );
};

export default Body;
