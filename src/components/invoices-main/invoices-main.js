import { useState } from "react";
import { Tab, InvoicesMainHeader, AllInvoice } from "../";
import "./invoices-main.css";
export const InvoicesMain = () => {
  const [selectValue, setSelectValue] = useState(1);

  const handleSelectChange = (evt) => {
    setSelectValue(+evt.target.value);
  };

  return (
    <div className="invoices-main">
      <Tab />
      <InvoicesMainHeader
        handleSelectChange={(evt) => handleSelectChange(evt)}
      />
      <AllInvoice selectValue={selectValue} />
    </div>
  );
};
