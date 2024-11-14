import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store/Store";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  Routes,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Card from "./components/Body/Card";
import RestaurantMenu from "./components/Body/RestaurantMenu";
import Cart from "./components/Header/Cart";

const HelpCenter = React.lazy(() => import("./components/Header/HelpCenter"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Card />,
      },
      {
        path: "/help",
        element: (
          <Suspense>
            <HelpCenter />{" "}
          </Suspense>
        ),
      },
      {
        path: "/:locality/:areaName/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
