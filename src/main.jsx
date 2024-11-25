import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./theme/index";
import "./scss/styles.scss";
import { ChakraProvider } from "@chakra-ui/react";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace />,
    // errorElement: <ErrorPage/>
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/who",
        element: <WhoWeAre />,
      },
      {
        path: "/who/:id",
        element: <Index/>,
        //errorElement: <Error404/>
      },
      {
        path: "/what",
        element: <WhatWeDo/>,
      },
      {
        path: "/what",
        element: <WhatWeDo/>,
      },
      {
        path: "/portfolio",
        element: <Portfolio />
      },
      {
        path: "/portfolio/:id",
        element: <ProjectPage />,
        errorElement: <Error404Portfolio/>
      },
      {
        path: "/toolbox",
        element: <Toolbox/>,
      },
      {
        path: "*",
        element: <Error404/>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  // </React.StrictMode>
);
