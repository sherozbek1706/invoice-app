import axios from "axios";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { ConfigButton, Input } from "../../components";
import { axiosInstance } from "../../services";
import { invoiceActions } from "../../store/invoice/invoice.slice";
import "./login-form.css";
export const LoginForm = () => {
  const location = useLocation()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = (values, actions) => {
    const user = {
      email: values.email,
      password: values.password,
    };

    axios
      .post("http://167.235.158.238:3001/login", user)
      .then((data) => {
        localStorage.setItem("login", true);
        localStorage.setItem("token", data.data.accessToken);
        localStorage.setItem("userId", data.data.user.id);

        axiosInstance.defaults.headers.Authorization = `Bearer ${data.data.accessToken}`;
        dispatch(invoiceActions.setUserLogin(true));
        dispatch(invoiceActions.setUserId(data.data.user.id));
        dispatch(invoiceActions.setToken(data.data.accessToken));
      })
      .finally(() => {
        navigate(location.state?.redirect || "/");
      });
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={yup
          .object()
          .shape({
            email: yup
              .string()
              .email("Email'ni to'g'ri kiriting!")
              .required("To'liq to'ldiring!"),
          })
          .shape({
            password: yup
              .string()
              .required("To'liq to'ldiring!")
              .min(3, "Eng kamida 3 ta simvol kiriting!")
              .max(15, "Eng ko'pida 15 ta simvol kiriting!"),
          })}
        onSubmit={handleLogin}
      >
        {() => (
          <Form className="LoginForm">
            <h2 className="LoginForm__title">Login</h2>
            <div className="LoginForm__input">
              <Input
                title={"Email"}
                type="email"
                name="email"
                placeholder="Login"
              />
            </div>
            <div className="LoginForm__input">
              <Input
                title={"Password"}
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="submit__button">
              <ConfigButton
                text={"Login"}
                textColor={"text_white"}
                color={"bg_blue"}
                type="submit"
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
