import { useSelector } from "react-redux";
import "./view-invoice-element.css";
export const ViewInvoicesElements = () => {
  const {
    invoiceItem: {
      id,
      to,
      email,
      dueDate,
      createdDate,
      description,
      price,
    },
  } = useSelector((state) => state.invoice);

  return (
    <div className="view-invoice-element">
      <div className="view-invoice-element__idanddesc">
        <p className="id-invoice">
          <span>#</span>
          {id}
        </p>
        <p className="desc-invoice">{description || ""}</p>
      </div>
      <div className="element-infos">
        <div className="info">
          <p className="info__title">Invoice Date</p>
          <p className="info__value">{new Date(createdDate).toDateString()}</p>
        </div>
        <div className="info">
          <p className="info__title">Bill To</p>
          <p className="info__value">{to}</p>
        </div>
        <div className="info">
          <p className="info__title">Sent to</p>
          <p className="info__value">{email}</p>
        </div>
        <div className="info">
          <p className="info__title">Payment Due </p>
          <p className="info__value">{new Date(dueDate).toDateString()}</p>
        </div>
      </div>
      <div className="amount-due">
        <p>Amount Due</p>
        <h3>£ {price}</h3>
      </div>
    </div>
  );
};
