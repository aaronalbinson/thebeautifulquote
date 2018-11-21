import React from "react";
import Helmet from "react-helmet";

import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="The Beautiful Quote" />
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
);

export default TemplateWrapper;
