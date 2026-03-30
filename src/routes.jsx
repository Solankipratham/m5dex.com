import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Mining from "./pages/Mining";
import Login from "./pages/Login";

// NEW IMPORTS
import GDPR from "./pages/GDPR";
import CookiePolicy from "./pages/CookiePolicy";
import LegalDisclaimers from "./pages/LegalDisclaimers";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> }, // ✅ FIXED
      { path: "mining", element: <Mining /> },
      { path: "login", element: <Login /> },

      { path: "gdpr", element: <GDPR /> },
      { path: "cookie-policy", element: <CookiePolicy /> },
      { path: "legal-disclaimers", element: <LegalDisclaimers /> },
      { path: "about", element: <About /> },
    ],
  },
]);

export default router;