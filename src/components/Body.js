import { restaurantList } from "../utils/mockData";
import RestuarantCard from "./RestuarantCard";

const Body = () => {
  let listOfRestaurant = [
    {
      type: "restaurant",
      data: {
        id: "74453",
        name: "Domino's Pizza",
        uuid: "87727dbd-7f2b-4857-9763-359624165845",
        city: "21",
        area: "Athwa",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        cuisines: ["Pizzas"],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 45,
        averageRating: 3.3,
      },
    },
    {
      type: "restaurant",
      data: {
        id: "74456",
        name: "KFC",
        uuid: "87727dbd-7f2b-4857-9763-359624165845",
        city: "21",
        area: "Athwa",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        cuisines: ["Pizzas"],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 45,
        averageRating: 4.2,
      },
    },
  ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            listOfRestaurant = listOfRestaurant.filter(
              (res) => res.data.averageRating > 4
            );
            console.log(listOfRestaurant);
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
