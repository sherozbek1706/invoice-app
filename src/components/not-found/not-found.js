import { Link } from "react-router-dom";
import "./not-found.css";
export const NotFound = () => {
  return (
    <div className="Not-Page">
      <i className="fa-solid fa-door-open"></i>
      <p>Bunday sahifa topilmadi!</p>
      <Link to={"/"} className="Not-Page__button">
        Bosh Sahifa
      </Link>
    </div>
  );
};
