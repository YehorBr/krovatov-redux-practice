import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { CatalogMenu } from "./Pages/Catalog/Catalog";
import { Product } from "./Pages/Product/Product";
import { CheckOut } from "./Pages/CheckOut/CheckOut";
import { HomePage } from "./Pages/HomePage/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/catalog",
        element: <CatalogMenu />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/checkout",
        element: <CheckOut />,
      },
    ],
  },
]);
