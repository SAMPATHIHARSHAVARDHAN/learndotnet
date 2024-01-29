import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Learn from "./components/NavBarList/Learn";
import CNet from "./components/NavBarList/CNet";
import VbNet from "./components/NavBarList/VbNet";
import AspNet from "./components/NavBarList/AspNet";
import About from "./components/NavBarList/About";
import SQL from "./components/NavBarList/SQL";
import ContactUs from "./components/NavBarList/ContactUs";
import SignUp from "./components/NavBarList/SignUp";
import SignIn from "./components/NavBarList/SignIn";
import GetCertified from "./components/NavBarList/GetCertified";
import AdoNet from "./components/NavBarList/AdoNet";
import MainLayout from "./components/MainLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route path="/" element={<Learn />} />
          <Route path="/c_net" element={<CNet />} />
          <Route path="/vb_net" element={<VbNet />} />
          <Route path="/asp_net" element={<AspNet />} />
          <Route path="/ado_net" element={<AdoNet />} />
          <Route path="/sql" element={<SQL />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/get_certified" element={<GetCertified />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/sign_in" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
