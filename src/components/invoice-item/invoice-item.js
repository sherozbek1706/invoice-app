import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { InvoiceItem__Paid as InvoiceItemPaid } from "../";
import "./invoice-item.css";
export const InvoiceItem = () => {
  const { allInvoice } = useSelector((state) => state.invoice);
  return (
    <>
      {allInvoice.map((invoice) => (
        <Link to={"/view-invoice/" + invoice.id} key={invoice.id}>
          <div className="invoice-item">
            <div className="invoice-item__id">
              <p>
                <span>#</span>{invoice.id}
              </p>
            </div>
            <div className="invoice-item__dueDate">
              <p>{new Date(invoice.dueDate).toDateString()}</p>
            </div>
            <div className="invoice-item__name">
              <p>{invoice.to}</p>
            </div>
            <div className="invoice-item__price">
              <p>£ {invoice.price}</p>
            </div>
            <div>
              <InvoiceItemPaid paid={invoice.paid} />
            </div>
            <div className="invoice-item__to">
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};
