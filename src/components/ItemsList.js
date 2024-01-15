import { CDN_URL } from "../utils/constant";

const ItemsList = ({ items }) => {
  // console.log("THis is new" + items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex"
        >
          <div>
            <div>
              <span>
                {item?.card?.info?.itemAttribute?.vegClassifier === "VEG"
                  ? "🟩"
                  : "🟥"}
              </span>
              <span className="text-orange-500">
                {item.card.info.ribbon.text}
              </span>
            </div>
            <div className="absolute">
              <buton className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg">
                Add +
              </buton>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-20  mr-5"
            />
          </div>
          <div>
            <div className="font-bold	">
              <span className="pr-4">{item.card.info.name}</span>
              <span>-Rs. {item.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
