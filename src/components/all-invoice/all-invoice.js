import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../../services";
import { invoiceActions } from "../../store/invoice/invoice.slice";
import { InvoiceEmpty } from "../invoice-empty";
import { InvoiceItem } from "../invoice-item/invoice-item";
import { Loader } from "../loader";
import "./all-invoice.css";
export const AllInvoice = ({ selectValue = "1" }) => {
  const dispatch = useDispatch();
  const { allInvoice, isLoading, isError } = useSelector(
    (state) => state.invoice
  );

  useEffect(() => {
    dispatch(invoiceActions.setLoading(true));
    var Filter = "";
    if (+selectValue === 1) Filter = "";
    else if (+selectValue === 2) Filter = `?paid_like=true`;
    else if (+selectValue === 3) Filter = `?paid_like=false`;

    axiosInstance
      .get(`/${Filter}`)
      .then((data) => {
        dispatch(invoiceActions.setAllInvoice(data.data));
      })
      .catch(() => {
        dispatch(invoiceActions.setError(true));
      })
      .finally(() => dispatch(invoiceActions.setLoading(false)));
  }, [selectValue]);


  if (isLoading) return <Loader />;
  if (isError)
    return (
      <h3 style={{ textAlign: "center", color: "red" }}>Xatolik Yuz Berdi!</h3>
    );
  if (!(allInvoice.length > 0)) return <InvoiceEmpty />;
  return (
    <div className="all-invoice">
      <InvoiceItem/>
    </div>
  );
};
