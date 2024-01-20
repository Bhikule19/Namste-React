import RestuarantCard, { withVegLabel } from "./RestuarantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { Banner_Cuisines_IMG } from "../utils/constant";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";

const Body = () => {
  // console.log(listOfRestaurant);
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);

  const [searchText, setsearchTExt] = useState("");

  const [filteredRest, setfilteredRest] = useState([]);

  const [bannerHeading, setBannerHeading] = useState("");

  const [cuisinesList, setCuisinesList] = useState([]);

  const [restChainHeading, setRestChainHeading] = useState("");

  const [restChainList, setRestChainList] = useState([]);

  const [restListHeading, setRestListHeading] = useState([]);

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

    setBannerHeading(json?.data?.cards[0]?.card?.card?.header?.title);

    setCuisinesList(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);

    setRestChainHeading(json?.data?.cards[1]?.card?.card?.header?.title);

    setRestChainList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRestListHeading(json?.data?.cards[2]?.card?.card?.title);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Looks like you are offline</h1>;

  const { setUserName, loggedInUser } = useContext(UserContext);

  const cuisineSlideLeft = () => {
    var slider = document.getElementById("cuisineSlider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const cuisineSlideRight = () => {
    var slider = document.getElementById("cuisineSlider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const restaurantSlideLeft = () => {
    var slider = document.getElementById("restaurantChainSlider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const restaurantSlideRight = () => {
    var slider = document.getElementById("restaurantChainSlider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  //Conditional Rendering using Ternary operator
  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body px-[7rem] font-[ProximaNova,arial,Helvetica Neue,sans-serif]">
      <div className="px-20">
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

        {/* ------------------------Banner------------------- */}

        <div className="banner">
          <div className="banner-heading  font-bold text-2xl flex justify-between	">
            <h1>{bannerHeading}</h1>
            <div className="flex">
              <IoArrowBackCircle
                className="m-1 opacity-30 hover:opacity-80 cursor-pointer"
                onClick={cuisineSlideLeft}
                size={35}
              />
              <IoArrowForwardCircle
                className="m-1 opacity-30 hover:opacity-80 cursor-pointer"
                onClick={cuisineSlideRight}
                size={35}
              />
            </div>
          </div>
          <div
            className="flex overflow-x-auto scroll scroll-smooth whitespace-nowrap no-scrollbar"
            id="cuisineSlider"
          >
            <div className="flex gap-4">
              {cuisinesList.map((cuisine) => (
                <div className="w-[150px]" key={cuisine.id}>
                  <img
                    className="w-full h-full"
                    src={Banner_Cuisines_IMG + cuisine.imageId}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ------------------------Banner------------------- */}

        <div className="divider">
          <hr className=" border-2 bg-[rgb(240, 240, 245)] m-[32px]"></hr>
        </div>

        {/* -------------------------Rest Chain section start ------------------------ */}

        <div className="rest-chain-section flex flex-col mb-5">
          <div className="res-chain-heading mb-5 flex justify-between">
            <h2 className="font-bold text-2xl">{restChainHeading}</h2>
            <div className="flex">
              <IoArrowBackCircle
                className="m-1 opacity-30 hover:opacity-80 cursor-pointer"
                onClick={restaurantSlideLeft}
                size={35}
              />
              <IoArrowForwardCircle
                className="m-1 opacity-30 hover:opacity-80 cursor-pointer"
                onClick={restaurantSlideRight}
                size={35}
              />
            </div>
          </div>
          <div className="rest-chain-list">
            <div
              className="top-rated-rest-chain-list flex overflow-x-scroll scroll whitespace-nowrap scroll-smooth no-scrollbar gap-10 "
              id="restaurantChainSlider"
            >
              {restChainList.map((topratedrest) => (
                <Link
                  key={topratedrest.info.id}
                  to={"/restaurants/" + topratedrest.info.id}
                >
                  {
                    <RestuarantCard
                      resData={topratedrest}
                      className="text-breakwords "
                    ></RestuarantCard>
                  }
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* -------------------------Rest Chain section end ------------------------ */}

        <div className="divider">
          <hr className=" border-2 bg-[rgb(240, 240, 245)] m-[32px]"></hr>
        </div>

        {/* ---------------------------------Restaurant list start--------------------------------- */}

        <div className="res-container">
          <div className="reslist-header mb-5">
            <h2 className="font-bold text-2xl">{restListHeading}</h2>
          </div>
          <div className="grid grid-cols-4 items-start gap-8 my-8">
            {
              listOfRestaurant.map((restuarant) => (
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
        {/* ---------------------------------Restaurant list end --------------------------------- */}
      </div>
    </div>
  );
};

export default Body;
