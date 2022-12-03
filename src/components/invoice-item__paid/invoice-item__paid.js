import "./invoice-item__paid.css";
export const InvoiceItem__Paid = ({ paid }) => {
  return (
    <div className={"invoice-item__paid" + (paid ? " Paid" : " Unpaid")}>
      <div className="invoice-paid">
        <div className="dot"></div>
        <p>{paid ? "Paid" : "Pending"}</p>
      </div>
    </div>
  );
};
