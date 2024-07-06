import React from "react";
import ReactDOM from "react-dom/client";

import "./App.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root.jsx";
import Error from "./pages/Error/Error.jsx";
import History from "./pages/student/history/history.jsx";
import { FeeTable } from "./pages/student/fee/feetable.jsx";
import Formfillup from "./pages/student/formfillup/formfillup.jsx";
import Pdf from "./pages/PDF/pdf.jsx";
import Payment from "./pages/student/fee/payment.jsx";
import Provost from "./pages/provost/provost.jsx";
import ExamController from "./pages/ExamController/ExamController.jsx";
import Varifier from "./pages/Varifier/Varifier.jsx";
import Progressbar from "./pages/ProgressBar/ProgressBar.jsx";
import Login from "./pages/Login/Login.jsx";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./components/functions/AuthProvider";
import PrivateRoute from "./components/functions/PrivateRoute";
import RoleChecking from "./components/functions/RoleChecking";
import CommonPage from "./pages/CommonPage/CommonPage";import { LogIn } from 'lucide-react';
import Login from './pages/Login/Login.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        {/* <PrivateRoute> */}
        <Root></Root>
        {/* </PrivateRoute> */}
      </AuthProvider>
    ),
    errorElement: <Error></Error>,
    children: [
      {
        path: "/common-path",
        element: (
          <PrivateRoute>
            <CommonPage></CommonPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/",
        element: (
          <PrivateRoute>
            <RoleChecking role="student" path="/common-path">
              <History></History>
            </RoleChecking>
          </PrivateRoute>
        ),
      },
      {
        path: "/feetable",
        element: (
          <PrivateRoute>
            <RoleChecking role="student" path="/common-path">
              <FeeTable></FeeTable>
            </RoleChecking>
          </PrivateRoute>
        ),
      },
      {
        path: "/certificate-withdrawal-form",
        element: (
          <PrivateRoute>
            <RoleChecking role="student" path="/common-path">
              <Formfillup></Formfillup>,
      },
      {
        path: '/allsections/:form_id',
        element: <Formfillup></Formfillup>,
        loader: () => fetch('http://bike-csecu.com:5000/api/certificate-withdrawal/search-formData/20701009')
            </RoleChecking>
          </PrivateRoute>
        ),
      },
      {
        path: "/pdf",
        element: (
          <PrivateRoute>
            <RoleChecking role="student" path="/common-path">
              <Pdf></Pdf>
            </RoleChecking>
          </PrivateRoute>
        ),
      },
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            <RoleChecking role="student" path="/common-path">
              <Payment></Payment>
            </RoleChecking>
          </PrivateRoute>
        ),
      },
      {
        path: "/provost",
        element: (
          <PrivateRoute>
            <RoleChecking role="provost" path="/common-path">
              <Provost></Provost>
            </RoleChecking>
          </PrivateRoute>
        ),
      },
      {
        path: "/examController",
        element: (
          <PrivateRoute>
            <RoleChecking role="exam_controller" path="/common-path">
              <ExamController></ExamController>
            </RoleChecking>
          </PrivateRoute>
        ),
      },
      {
        path: "/varifier",
        element: (
          <PrivateRoute>
            <RoleChecking
              role="certificate_verifier1"
              path="/common-path"
            ></RoleChecking>
            <Varifier></Varifier>
          </PrivateRoute>
        ),
      },
      {
        path: '/progressbar',
        element: <Progressbar></Progressbar>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
        path: "/progressbar",
        element: (
          <PrivateRoute>
            <RoleChecking role="student" path="/common-path">
              <Progressbar></Progressbar>
            </RoleChecking>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </QueryClientProvider>
      </HelmetProvider>
    </QueryClientProvider>
    <ToastContainer />
  </React.StrictMode>,
);
