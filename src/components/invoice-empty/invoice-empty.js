import "./invoice-empty.css";
export const InvoiceEmpty = () => {
  return (
    <div className="Invoice-empty">
      <div className="Invoice-empty__card">
        <h2 className="Invoice-empty__card-text">There is nothing here</h2>
        <p className="Invoice-empty__card-paragraph">
          Create an invoice by clicking the New Invoice button and get started
        </p>
      </div>
    </div>
  );
};
