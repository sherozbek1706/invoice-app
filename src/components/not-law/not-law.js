import "./not-law.css";
import { Link } from "react-router-dom";
export const NotLaw = () => {
  return (
    <div className="Not-Law">
      <i className="fa-solid fa-triangle-exclamation"></i>
      <p>Mumkin emas!</p>
      <Link to={"/"} className="Not-Law__button">
        Bosh Sahifa
      </Link>
    </div>
  );
};
