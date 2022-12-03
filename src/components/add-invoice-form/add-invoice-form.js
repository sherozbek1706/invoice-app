import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as yup from "yup";
import { ConfigButton, Input, Select } from "../";
import { axiosInstance } from "../../services";
import "./add-invoice-form.css";
import { Loader } from "../";

export const AddInvoiceForm = ({ onSubmit, type = "add" }) => {
  const [invoiceItem, setInvoiceItem] = useState([]);
  const handleAddInvoice = (value) => {
    onSubmit(value);
  };
  const { id } = useParams();

  useEffect(() => {
    axiosInstance.get(`/${id}`).then((data) => setInvoiceItem(data.data));
  }, [id]);

  if (type === "edit" && !invoiceItem.to) return <Loader />;
  return (
    <Formik
      initialValues={{
        to: type === "edit" ? invoiceItem.to : "",
        email: type === "edit" ? invoiceItem.email : "",
        dueDate: type === "edit" ? invoiceItem.dueDate : "",
        term: type === "edit" ? invoiceItem.term : "",
        description: type === "edit" ? invoiceItem.description : "",
        price: type === "edit" ? invoiceItem.price : "",
      }}
      validationSchema={yup
        .object()
        .shape({
          email: yup
            .string()
            .email("Email'ni to'g'ri kiriting!")
            .required("To'liq to'ldiring!"),
        })
        .shape({
          to: yup
            .string()
            .required("To'liq to'ldiring!")
            .min(3, "Eng kamida 3 ta simvol kiriting!")
            .max(50, "Eng ko'pida 50 ta simvol kiriting!"),
        })
        .shape({
          dueDate: yup.string().required("Data Kiriting!"),
        })
        .shape({
          price: yup
            .number()
            .required("To'liq to'ldiring!")
            .min(100, "Eng kamida 100 raqami kiritilishi lozim!")
            .max(1000, "Eng ko'pida 1000 raqami kiritilishi lozim!"),
        })
        .shape({
          description: yup.string(),
        })}
      onSubmit={handleAddInvoice}
    >
      {() => (
        <Form className="add-invoice__form">
          <h2 className="add-invoice__title">New Invoice</h2>
          <div className="add-invoice__input">
            <Input
              name="to"
              title="Client’s Name"
              type="text"
              placeholder="Alex Grim"
            />
          </div>
          <div className="add-invoice__input">
            <Input
              name="email"
              title="Client’s Email"
              type="email"
              placeholder="alexgrim@mail.com"
            />
          </div>
          <div className="add-invoice__data-and-select">
            <div className="add-invoice__input">
              <Input
                name="dueDate"
                title="Due Date"
                type="date"
                className="date-input"
              />
            </div>
            <div className="add-invoice__input right-input">
              <p>Payment Terms</p>
              <Select />
            </div>
          </div>
          <div className="add-invoice__input">
            <Input
              name="description"
              title="Project Description"
              type="text"
              placeholder="Graphic Design"
            />
          </div>
          <div className="add-invoice__input">
            <Input
              name="price"
              title="Price"
              type="number"
              placeholder="1000"
            />
          </div>
          <div className="add-invoice__buttons-Field">
            <div className="add-invoice__buttons-Field__right-side">
              {type === "add" ? (
                <Link to="/">
                  <ConfigButton
                    type="submit"
                    textColor="text_blue"
                    color="bg_opacity"
                    text="Discard"
                  />
                </Link>
              ) : (
                ""
              )}
            </div>
            <div className="add-invoice__buttons-Field__left-side">
              {type === "edit" ? (
                <Link to={`/view-invoice/${id}`}>
                  <ConfigButton
                    type="submit"
                    textColor="text_blue"
                    color="bg_opacity"
                    text="Cancel"
                  />
                </Link>
              ) : (
                ""
              )}
              <ConfigButton
                type="submit"
                textColor="text_white"
                color="bg_blue"
                text={type === "edit" ? "Edit Invoice" : "Add Invoice"}
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
