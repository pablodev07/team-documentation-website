window.global ||= window;

import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./theme/index";
import "./scss/styles.scss";
import { ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Index from "./components/Pages/WhoWeAre/(index)/Index";
import Home from "./components/Pages/Home/Home";
import WhoWeAre from "./components/Pages/WhoWeAre/WhoWeAre";
import WhatWeDo from "./components/Pages/WhatWeDo/WhatWeDo";
import Portfolio from "./components/Pages/Portfolio/Portfolio";
import Error404 from "./components/Pages/Error404/Error404";
import Toolbox from "./components/Pages/Toolbox/Toolbox";
import ProjectPage from "./components/Pages/Portfolio/(index)/Index";
import Error404Portfolio from "./components/Pages/Error404Portfolio/Error404Portfolio";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>  {/* Use BrowserRouter directly */}
      <Routes> {/* Use Routes component */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Layout><Home /></Layout>} /> {/* Wrap route elements in Layout */}
        <Route path="/who" element={<Layout><WhoWeAre /></Layout>} />
        <Route path="/who/:id" element={<Layout><Index /></Layout>} />
        <Route path="/what" element={<Layout><WhatWeDo /></Layout>} />
        <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
        <Route
          path="/portfolio/:id"
          element={<Layout><ProjectPage /></Layout>}
          errorElement={<Error404Portfolio />}
        />
        <Route path="/toolbox" element={<Layout><Toolbox /></Layout>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
