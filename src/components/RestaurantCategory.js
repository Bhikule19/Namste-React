import ItemsList from "./ItemsList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setshowItems }) => {
  const HandleClick = () => {
    //Toggle accordion feature to show the menu items
    // setshowItems(!showItems);

    setshowItems();
  };

  // console.log(data);
  return (
    <div>
      <div className="w-6/12 bg-gray-50 p-4 shadow-lg mx-auto my-6">
        <div className="flex justify-between cursor-pointer ">
          <span className="font-bold text-lg" onClick={HandleClick}>
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemsList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
