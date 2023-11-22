import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CustomerRoute from "./components/CustomerRoute";
import AdminRoute from "./components/AdminRoute";
import HomePage from "./pages/HomePage";
import InstructionPage from "./pages/InstructionPage";
import LoginPage from "./pages/LoginPage";
import PrintingPage from "./pages/PrintingPage";
import HistoryPage from "./pages/HistoryPage";
import FeedbackPage from "./pages/FeedbackPage";
import ManagePrinterPage from "./pages/admin/ManagePrinterPage";
import ManagePrintingPage from "./pages/admin/ManagePrintingPage";
import CustomerServicePage from "./pages/admin/CustomerServicePage";
import SSOPage from "./pages/SSOPage";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index={true} path="/" element={<HomePage />} />
        <Route path="/instruction" element={<InstructionPage />} />
        <Route path="/printing" element={<PrintingPage />} />
        <Route path="" element={<CustomerRoute />}>
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Route>
        <Route path="" element={<AdminRoute />}>
          <Route path="/admin/printer-manage" element={<ManagePrinterPage />} />
          <Route
            path="/admin/printing-manage"
            element={<ManagePrintingPage />}
          />
          <Route
            path="admin/customer-service"
            element={<CustomerServicePage />}
          />
        </Route>
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sso" element={<SSOPage />} />
    </>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
