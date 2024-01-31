import React from "react";
import { NextPage } from "next";
import Header from "../src/components/Header/Index";
import Dashboard from "../src/components/DashBoard/Index";
import Footer from "../src/components/Footer/Index";
const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default Home;
