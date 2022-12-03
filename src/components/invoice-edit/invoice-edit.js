import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "../../services";
import { invoiceActions } from "../../store/invoice/invoice.slice";
import { AddInvoiceForm } from "../add-invoice-form";
import { BackPage } from "../back-page";
import { Tab } from "../tab";

export const InvoiceEdit = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { userId, invoiceItem } = useSelector((state) => state.invoice);
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance
      .get(`/${id}`)
      .then((data) => dispatch(invoiceActions.setInvoiceItem(data.data)));
  }, []);

  const handleEditInvoice = (value) => {
    const date = new Date();
    const editingInvoice = {
      userId: userId,
      paid: invoiceItem.paid,
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
    axiosInstance.put(`/${id}`, editingInvoice).then(() => navigate("/"));
  };

  return (
    <div className="add-invoice-main">
      <BackPage to={`/view-invoice/${id}`} />
      <Tab />
      <AddInvoiceForm onSubmit={handleEditInvoice} type="edit" />
    </div>
  );
};
