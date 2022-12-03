import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import { InvoiceAdd, InvoiceEdit, NotFound, NotLaw } from "../components";
import { Invoices, Login, ViewInvoice } from "../pages";

const routes = [
  {
    path: "/",
    element: <Invoices />,
  },
  {
    path: "/not-law",
    element: <NotLaw />,
  },
  {
    path: "/view-invoice/:id",
    children: [
      {
        path: "",
        element: <ViewInvoice />,
      },
      {
        path: "edit",
        element: <InvoiceEdit />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const Routes = () => {
  const { userLogin } = useSelector((state) => state.invoice);
  const elements = useRoutes([
    ...(!userLogin
      ? [
          {
            path: "/login",
            element: <Login />,
          },
        ]
      : [
          {
            path: "/add-invoice",
            element: <InvoiceAdd />,
          },
        ]),
    ...routes,
  ]);
  return elements;
};
