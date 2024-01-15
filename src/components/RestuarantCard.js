import { CDN_URL } from "../utils/constant";

const RestuarantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo, sla } =
    resData?.info; // destructuring

  return (
    <div className="res-card bg-gray-200 rounded-lg max-w-80 p-5">
      <img className="res-logo	" src={CDN_URL + cloudinaryImageId}></img>
      <h4 className=" font-medium	 ">{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{sla.deliveryTime} mins</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

//Higher Order component

export const withVegLabel = (RestuarantCard) => {
  return (props) => {
    return (
      <div className="">
        <label className="absolute bg-green-500 text-white m-2 p-2 rounded-lg">
          Veg
        </label>
        <RestuarantCard {...props} />
      </div>
    );
  };
};

export default RestuarantCard;
