import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  BackPage, Loader, Tab,
  ViewInvoicesElements,
  ViewInvoicesSettings
} from "../../components";
import { axiosInstance } from "../../services";
import { invoiceActions } from "../../store/invoice/invoice.slice";
import "./view-invoice-main.css";
export const ViewInvoiceMain = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.invoice);
  useEffect(() => {
    dispatch(invoiceActions.setLoading(true));
    axiosInstance
      .get(`/${id}`)
      .then((data) => dispatch(invoiceActions.setInvoiceItem(data.data)))
      .finally(() => dispatch(invoiceActions.setLoading(false)));
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="view-invoices-main">
      <Tab />
      <BackPage to="/" />
      <ViewInvoicesSettings />
      <ViewInvoicesElements />
    </div>
  );
};
