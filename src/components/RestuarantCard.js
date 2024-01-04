import { CDN_URL } from "../utils/constant";

const RestuarantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo, sla } =
    resData?.info; // destructuring

  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId}></img>
      <h4>{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{sla.deliveryTime} mins</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestuarantCard;
