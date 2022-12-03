import { AddInvoiceForm, Tab, BackPage } from "../";
import "./add-invoice-main.css";
export const AddInvoiceMain = () => {
  return (
    <>
      <div className="add-invoice-main">
        <BackPage to="/" />
        <Tab />
        <AddInvoiceForm />
      </div>
    </>
  );
};
