import { CDN_URL } from "../utils/constant";

const RestuarantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, deliveryTime, costForTwoString, cloudinaryImageId } =
    resData?.data; // destructuring

  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId}></img>
      <h4>{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{deliveryTime} mins</h4>
      <h4>{costForTwoString}</h4>
    </div>
  );
};

export default RestuarantCard;
