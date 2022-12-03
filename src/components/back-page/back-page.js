import { Link } from "react-router-dom";
import "./back-page.css";
export const BackPage = ({ to }) => {
  if (to) {
    return (
      <div className="back-page">
        <Link to={to}>
          <p>
            <i className="fa-solid fa-angle-left"></i>
            Go back
          </p>
        </Link>
      </div>
    );
  }
};
