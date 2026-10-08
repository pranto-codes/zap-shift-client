import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Homepage from "../Pages/Home/Homepage/Homepage";
import Coverage from "../Pages/Coverage/Coverage";
import About from "../Pages/About/About";
import OurServices from "../Pages/Services/OurServices";
import Error from "../Pages/Error/Error";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Pages/AuthRelatedPages/Login";
import Register from "../Pages/AuthRelatedPages/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../Pages/Rider/Rider";
//import SendParcel from "../Pages/SendParcel/SendParcel";
import SendParcel1 from "../Pages/SendParcel/SendParcel1";
import DashBoardLayout from "../layouts/DashBoardLayout";
import MyParcels from "../Pages/Dashboard/MyParcels";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaySuccess from "../Pages/Dashboard/Payment/PaySuccess";
import PayCancel from "../Pages/Dashboard/Payment/PayCancel";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import RiderApplications from "../Pages/Dashboard/RiderApplications/RiderApplications";
import UsersManagement from "../Pages/Dashboard/UserManagement/UsersManagement";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,

    children: [
      {
        index: true,
        Component: Homepage,
      },

      {
        path: "coverage",
        Component: Coverage,
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: "sendParcel",
        element: (
          <PrivateRoute>
            <SendParcel1></SendParcel1>
          </PrivateRoute>
        ),
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: "rider",
        element: (
          <PrivateRoute>
            <Rider></Rider>
          </PrivateRoute>
        ),
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "services",
        Component: OurServices,
      },
      {
        path: "*",
        Component: Error,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <DashBoardLayout></DashBoardLayout>
          </PrivateRoute>
        ),
        children: [
          {
            path: "myParcels",
            Component: MyParcels,
          },
          {
            path: "payment/:parcelId",
            Component: Payment,
          },

          {
            path: "payment-success",
            Component: PaySuccess,
          },
          {
            path: "paymentHistory",
            Component: PaymentHistory,
          },
          {
            path: "payment-cancelled",
            Component: PayCancel,
          },

          {
            path: "usersManagement",
            Component: UsersManagement,
          },
          {
            path: "riderApplications",
            Component: RiderApplications,
          },
        ],
      },
    ],
  },
]);
