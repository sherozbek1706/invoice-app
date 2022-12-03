import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Shape from "../../assets/images/Combined Shape.png";
import LoginSuccess from "../../assets/images/Oval (1).png";
import NotLogin from "../../assets/images/user-not-login.png";

import "./tab.css";
export const Tab = () => {
  const { userLogin } = useSelector((state) => state.invoice);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("login");
    window.location.assign("/");
  };
  return (
    <>
      <div className="tab">
        <div className="tab__head">
          <img src={Shape} alt="" />
        </div>
        <div className="tab__login">
          {userLogin ? (
            <i
              onClick={handleLogout}
              className="fa-solid fa-right-from-bracket"
            ></i>
          ) : (
            ""
          )}
          <Link to={userLogin ? "/" : "/login"}>
            <img
              src={userLogin ? LoginSuccess : NotLogin}
              alt=""
              className="photo-shape"
            />
          </Link>
        </div>
      </div>
    </>
  );
};
