import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faStar } from "@fortawesome/free-solid-svg-icons";

const starIcon = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faStar} />
    </div>
  );
};

export default starIcon;
