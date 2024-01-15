import RestuarantCard, { withVegLabel } from "./RestuarantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);

  const [searchText, setsearchTExt] = useState("");

  // console.log(listOfRestaurant);

  const [filteredRest, setfilteredRest] = useState([]);

  const RestaurantCardVeg = withVegLabel(RestuarantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0177989&lng=72.84781199999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // console.log(json);
    setlistOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRest(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Looks like you are offline</h1>;

  const { setUserName, loggedInUser } = useContext(UserContext);

  //Conditional Rendering using Ternary operator
  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex justify-between	p-10 ">
        <div className="search ">
          <input
            type="text"
            className="search-box border-4	 "
            value={searchText}
            onChange={(e) => {
              setsearchTExt(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const filteredRest = listOfRestaurant.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setfilteredRest(filteredRest);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn bg-red-500 p-2 rounded-2xl hover:bg-black   "
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setlistOfRestaurant(filteredList);
            // setfilteredRest(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="m-4 p-4 flex">
          <label>User:</label>
          <input
            className="border border-black"
            onChange={(e) => setUserName(e.target.value)}
            value={loggedInUser}
          ></input>
        </div>
      </div>

      <div className="res-container flex p-5 m-5 gap-10 flex-wrap">
        {
          filteredRest.map((restuarant) => (
            <Link
              key={restuarant.info.id}
              to={"/restaurants/" + restuarant.info.id}
            >
              {restuarant.info.veg ? (
                <RestaurantCardVeg resData={restuarant} />
              ) : (
                <RestuarantCard resData={restuarant} />
              )}
            </Link>
          )) // Looping over arrray using Map
        }
      </div>
    </div>
  );
};

export default Body;
