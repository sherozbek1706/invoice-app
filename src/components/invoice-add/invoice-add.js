import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../services";
import { AddInvoiceForm } from "../add-invoice-form";
import { BackPage } from "../back-page";
import { Tab } from "../tab";

export const InvoiceAdd = () => {
  const navigate = useNavigate();
  const { userId } = useSelector((state) => state.invoice);
  const handleInvoiceAdd = (value) => {
    const date = new Date();
    const newInvoice = {
      userId: userId,
      paid: false,
      email: value.email,
      to: value.to,
      dueDate: value.dueDate,
      term: +value.term,
      createdDate: `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}`,
      description: value.description,
      price: value.price,
    };

    axiosInstance.post("", newInvoice).then((data) => {
      navigate("/");
    });
  };

  return (
    <div className="add-invoice-main">
      <BackPage to="/" />
      <Tab />
      <AddInvoiceForm onSubmit={handleInvoiceAdd} />;
    </div>
  );
};
