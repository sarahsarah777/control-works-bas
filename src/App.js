/**
=========================================================
* ControlWorks - v0.1.0
=========================================================

* Product Page: https://controlworksbas.com/
* Copyright 2024 ControlWorks BAS

 =========================================================

*/

import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "./assets/theme";
import Home from "./layouts/pages/home";

// Material Kit 2 React routes
import routes from "./routes";
import CaseStudy1 from "./pages/CaseStudies/CaseStudy1";
import CaseStudy2 from "./pages/CaseStudies/CaseStudy2";
import CaseStudy3 from "./pages/CaseStudies/CaseStudy3";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/casestudy1" element={<CaseStudy1 />} />
        <Route path="/casestudy2" element={<CaseStudy2 />} />
        <Route path="/casestudy3" element={<CaseStudy3 />} />
      </Routes>
    </ThemeProvider>
  );
}
