import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./invoices-main-header.css";

export const InvoicesMainHeader = ({ handleSelectChange }) => {
  const { allInvoice, userLogin } = useSelector((state) => state.invoice);

  return (
    <div className="invoices-main-header">
      <div className="invoices-main-header__title">
        <h1>Invoices</h1>
        <p>There are {allInvoice.length} total invoices</p>
      </div>
      <div className="invoices-main-header__status">
        <div>
          <select
            className="invoices-main-header__select"
            onChange={(evt) => handleSelectChange(evt)}
          >
            <option value="1">All</option>
            <option value="2">Paid</option>
            <option value="3">Unpaid</option>
          </select>
        </div>
        <Link
          to={userLogin ? "/add-invoice/" : "/login"}
          state={{
            redirect: !userLogin && "/add-invoice/",
          }}
        >
          <div className="add-invoice-button">
            <div className="plus">
              <i className="fa-solid fa-plus"></i>
            </div>
            <p>New Invoice</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
