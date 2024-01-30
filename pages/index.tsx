import React from "react";
import { NextPage } from "next";
import Header from "../src/components/header";
import Dashboard from "../src/components/dashboard";
const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Dashboard />
    </div>
  );
};

export default Home;
