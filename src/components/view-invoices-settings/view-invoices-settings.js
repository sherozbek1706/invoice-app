import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../services";
import { invoiceActions } from "../../store/invoice/invoice.slice";
import { ConfigButton } from "../config-button";
import { InvoiceItem__Paid as InvoiceItemPaid } from "../invoice-item__paid";
import "./view-invoices-settings.css";

export const ViewInvoicesSettings = () => {
  const {
    userId,
    userLogin,
    isError,
    invoiceItem: { paid, id, userId: InvoiceUserID },
  } = useSelector((state) => state.invoice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDeleteInvoice = () => {
    axiosInstance
      .delete(`/${id}`)
      .then(() => navigate("/"))
      .catch(() => dispatch(invoiceActions.setError(true)));
  };
  const handlePaidClick = () => {
    axiosInstance
      .patch(`/${id}`, { userId: userId, paid: !paid })
      .then(() => {
        navigate(`/`);
      })
      .catch(() => dispatch(invoiceActions.setError(true)));
  };

  if (isError) {
    dispatch(invoiceActions.setError(false));
    return navigate("/not-law");
  }

  return (
    <div className="invoice-settings">
      <div className="invoice-settings__pending">
        <p className="status">status</p>
        <div>
          <InvoiceItemPaid paid={paid} />
        </div>
      </div>
      <div className="invoice-settings__buttons">
        <Link
          to={
            userLogin && +InvoiceUserID === +userId
              ? "/view-invoice/" + id + "/edit"
              : !(+InvoiceUserID === +userId)
              ? "/not-law"
              : userLogin
              ? "/view-invoice/" + id
              : "/login"
          }
          state={{
            redirect: !userLogin && `/view-invoice/${id}/edit`,
          }}
        >
          <ConfigButton
            textColor={"text_blue"}
            color={"bg_opacity"}
            text={"Edit"}
          />
        </Link>

        {userLogin ? (
          <b onClick={handleDeleteInvoice}>
            <ConfigButton
              textColor={"text_white"}
              color={"bg_red"}
              text={"Delete"}
            />
          </b>
        ) : (
          <Link to={"/login"}>
            <b>
              <ConfigButton
                textColor={"text_white"}
                color={"bg_red"}
                text={"Delete"}
              />
            </b>
          </Link>
        )}

        {paid ? (
          ""
        ) : (
          <Link
            to={userLogin ? "" : "/login"}
            state={{
              redirect: !userLogin && "/view-invoice/" + id,
            }}
            onClick={handlePaidClick}
          >
            <ConfigButton
              textColor={"text_white"}
              color={"bg_blue"}
              text={"Mark as Paid"}
            />
          </Link>
        )}
      </div>
    </div>
  );
};
