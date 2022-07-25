import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Request } from "./pages/request";
import { PostedWorks } from "./pages/postedWorks";
import { PostedPresupuestos } from "./pages/postedPresupuestos";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Login } from "./component/login";
import { Signup } from "./pages/signup";
import { WorkersList } from "./pages/WorkersList";
import { BudgetsView } from "./pages/budgetsView";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Demo />} path="/demo" />
          <Route element={<Single />} path="/single/:theid" />
          <Route element={<Signup />} path="/signup" />
          <Route element={<Login />} path="/login" />
          <Route element={<Request />} path="/request" />
          <Route element={<PostedWorks />} path="/works" />
          <Route element={<WorkersList />} path="/workers-list" />
          <Route element={<PostedPresupuestos />} path="/posted-presupuestos" />
          <Route element={<h1>Not found!</h1>} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default injectContext(Layout);
